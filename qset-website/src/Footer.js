import './footer.css';
import {Mail, MapPin, Phone,} from "lucide-react";
import {SiInstagram, SiFacebook, SiYoutube} from "@icons-pack/react-simple-icons";
import linkedinLogo from './assets/linkedin_logo.png';
import xLogo from './assets/x_logo.png';

const Footer = () => {
    return ( 
        <section className="footer">
            <div className="footer-box"> 
                <div className="footer-section">
                    <h3 className="footer-title">Contact Info</h3>
                    <div className="contact-info">
                        <div className="contact-row">
                            <Mail className="footer-icon"/>
                            <span className="footer-text">qset@engsoc.queensu.ca</span>
                        </div>
                        <div className="contact-row">
                            <Phone className="footer-icon"/>
                            <span className="footer-text">Is there a phone number?</span>
                        </div>
                        
                    </div>
                    
                </div>
                <div className="footer-section">
                    <h3 className="footer-title">Address</h3>
                    <div className="contact-row">
                        <MapPin className="footer-icon"/>
                        <span className="footer-text">Beamish-Munro Hall, Room 115F, 45 Union St, Kingston, ON K7L 3N6</span>
                    </div>
                </div>
                <div className="footer-section">
                    <h3 className="footer-title">Follow Us</h3>
                    <div className="footer-text">Stay updated with our latest projects and achievements!</div>
                    <div className="social-icons">
                        <a href="https://twitter.com/QueenSpcEngTeam" target="_blank" rel="noopener noreferrer">
                            <img className="social-icon" src={xLogo} alt="X"/>
                        </a>
                        <a href="https://www.linkedin.com/company/queen's-space-engineering-team-qset-/" target="_blank" rel="noopener noreferrer">
                            <img className="social-icon" src={linkedinLogo} alt="LinkedIn"/>
                        </a>
                        <a href="https://www.instagram.com/qset/" target="_blank" rel="noopener noreferrer">    
                            <SiInstagram className="social-icon"/>
                        </a>
                        <a href="https://www.facebook.com/queensspaceteam" target="_blank" rel="noopener noreferrer">
                            <SiFacebook className="social-icon"/>
                        </a>
                        <a href="https://www.youtube.com/channel/UCOo63MWDoMnAq9iDsHKFmcQ" target="_blank" rel="noopener noreferrer">
                            <SiYoutube className="social-icon"/>
                        </a>
                    </div>
                </div>
                
            </div>
            <div className="footer-bottom">
                <div className="footer-bottom-text">© 2026 Queens Space Engineering Team. All rights reserved.</div>
            </div>
        </section>
     );
}
 
export default Footer;