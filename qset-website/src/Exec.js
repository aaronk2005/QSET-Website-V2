// Exec page: groups ExecTeam entries into logical tiers and renders them
// as balanced rows of circular portrait cards with frosted info panels.
import './Exec.css';
import ExecTeam from './ExecTeam';

// Layout helper: split a flat list into rows where each row has at most
// `maxPerRow` items and row lengths differ by at most 1. This keeps the grid
// visually balanced even when the total member count does not divide evenly.
const chunkIntoRows = (items, maxPerRow = 5) => {
  if (!items.length) return [];
  const rowsCount = Math.ceil(items.length / maxPerRow);
  const baseSize = Math.floor(items.length / rowsCount);
  const remainder = items.length % rowsCount;
  const rows = [];
  let start = 0;

  for (let i = 0; i < rowsCount; i += 1) {
    const size = baseSize + (i < remainder ? 1 : 0);
    rows.push(items.slice(start, start + size));
    start += size;
  }

  return rows;
};

const Exec = () => {
  // Role helpers – centralize the role string checks so copy changes only
  // need to be updated in one place (ExecTeam roles can evolve over time).
  const isSatellite = (role) => role.startsWith('Satellite');
  const isRover = (role) => role.startsWith('Rover');
  const isCaptain = (role) => role.includes('Captain');
  const isLead = (role) => role.includes('Lead');

  // --- Tier definitions: keep a single source of truth for how ExecTeam
  // members are grouped on the page (Satellite → Rover → Other). If titles
  // or grouping rules change, update the filters + `tiers` array together.
  const satelliteCaptain = ExecTeam.filter(
    (m) => isSatellite(m.role) && isCaptain(m.role)
  );

  const satelliteManagers = ExecTeam.filter(
    (m) =>
      isSatellite(m.role) &&
      !isCaptain(m.role) &&
      !isLead(m.role)
  );

  const roverCaptain = ExecTeam.filter(
    (m) => isRover(m.role) && isCaptain(m.role)
  );

  const roverManagers = ExecTeam.filter(
    (m) =>
      isRover(m.role) &&
      !isCaptain(m.role) &&
      !isLead(m.role)
  );

  const roverLeads = ExecTeam.filter(
    (m) => isRover(m.role) && isLead(m.role)
  );

  const otherManagers = ExecTeam.filter(
    (m) => !isSatellite(m.role) && !isRover(m.role)
  );

  // Ordered list of tiers as they appear vertically on the page.
  const tiers = [
    { title: 'Satellite Captain', members: satelliteCaptain },
    { title: 'Satellite Managers', members: satelliteManagers },
    { title: 'Rover Captain', members: roverCaptain },
    { title: 'Rover Managers', members: roverManagers },
    { title: 'Rover Leads', members: roverLeads },
    { title: 'Other Managers', members: otherManagers },
  ];

  return (
    <div className="exec-page">
      <div className="exec-container">
        <h1 className="exec-title">Executive Team</h1>
        <div className="exec-list">
          {/* Render only tiers that currently have members. Each tier is split
              into rows using `chunkIntoRows` and each row becomes a flex row
              of portrait cards. */}
          {tiers.map(({ title, members }) => {
            if (!members.length) return null;
            const rows = chunkIntoRows(members);

            return (
              <section key={title} className="exec-tier">
                {/* Each tier is rendered as one or more horizontal rows of cards. */}
                {rows.map((row, rowIndex) => (
                  <div
                    key={`${title}-row-${rowIndex}`}
                    className="exec-row"
                  >
                    {row.map((member) => (
                      <div key={member.name} className="exec-card">
                        {/* Circular portrait; fallback to placeholder when no image URL. */}
                        <div className="exec-portrait">
                          <img
                            src={member.image || '/exec/empty-exec.jpg'}
                            alt={member.name}
                            className="exec-image"
                          />
                        </div>
                        {/* Frosted glass card: name, role, and optional contact links. */}
                        <div className="exec-info">
                          <span className="exec-name">{member.name}</span>
                          <span className="exec-role">{member.role}</span>
                          {member.email && (
                            <a
                              href={`mailto:${member.email}`}
                              className="exec-email"
                            >
                              {member.email}
                            </a>
                          )}
                          {member.linkedin && (
                            <a
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="exec-linkedin"
                              aria-label={`${member.name} on LinkedIn`}
                            >
                              LinkedIn
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Exec;
