/**
 * Downloads exec team images from URLs in src/execTeam.js (or ExecTeam.js)
 * and saves them to public/exec/, then updates the data file to use local paths.
 *
 * Run from project root: node scripts/download-exec-images.js
 * Or: npm run download-exec-images
 */

const fs = require("fs");
const path = require("path");
const https = require("https");
const http = require("http");

const PROJECT_ROOT = path.resolve(__dirname, "..");
const DATA_FILE = path.join(PROJECT_ROOT, "src", "execTeam.js");
const EXEC_DIR = path.join(PROJECT_ROOT, "public", "exec");

function slug(name) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

function getExt(url) {
  const match = url.match(/\.(jpg|jpeg|png|gif|webp)(?:\?|$)/i);
  return match ? (match[1].toLowerCase() === "jpeg" ? "jpg" : match[1].toLowerCase()) : "jpg";
}

// Headers that mimic a request from the qset.ca exec page so the server
// returns the real image instead of the "hotlinked" placeholder.
const FETCH_HEADERS = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  Referer: "https://qset.ca/exec/",
  Accept: "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
};

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith("https") ? https : http;
    const req = lib.get(url, { headers: FETCH_HEADERS }, (res) => {
      const chunks = [];
      res.on("data", (chunk) => chunks.push(chunk));
      res.on("end", () => resolve(Buffer.concat(chunks)));
    });
    req.on("error", reject);
    req.setTimeout(15000, () => {
      req.destroy();
      reject(new Error("Timeout"));
    });
  });
}

function extractEntries(content) {
  const entries = [];
  const regex = /name:\s*"([^"]+)"[^}]*?image:\s*"(https?:\/\/[^"]+)"/g;
  let m;
  while ((m = regex.exec(content)) !== null) {
    entries.push({ name: m[1], imageUrl: m[2] });
  }
  return entries;
}

async function main() {
  const dataPath = fs.existsSync(DATA_FILE) ? DATA_FILE : path.join(PROJECT_ROOT, "src", "ExecTeam.js");
  let content = fs.readFileSync(dataPath, "utf8");

  const entries = extractEntries(content);
  if (entries.length === 0) {
    console.log("No image URLs found in data file.");
    process.exit(1);
  }

  if (!fs.existsSync(EXEC_DIR)) {
    fs.mkdirSync(EXEC_DIR, { recursive: true });
    console.log("Created", EXEC_DIR);
  }

  const replacements = [];
  for (let i = 0; i < entries.length; i++) {
    const { name, imageUrl } = entries[i];
    const ext = getExt(imageUrl);
    const baseName = `${String(i + 1).padStart(2, "0")}-${slug(name)}`;
    const fileName = `${baseName}.${ext}`;
    const filePath = path.join(EXEC_DIR, fileName);
    const localPath = `/exec/${fileName}`;

    if (content.includes(imageUrl)) {
      replacements.push({ from: imageUrl, to: localPath });
    }

    try {
      console.log(`Downloading ${i + 1}/${entries.length}: ${name} -> ${fileName}`);
      const buffer = await fetchUrl(imageUrl);
      fs.writeFileSync(filePath, buffer);
    } catch (err) {
      console.error(`Failed to download ${name} (${imageUrl}):`, err.message);
    }
  }

  for (const { from, to } of replacements) {
    content = content.split(from).join(to);
  }

  fs.writeFileSync(dataPath, content);
  console.log("Updated", path.basename(dataPath), "with local image paths.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
