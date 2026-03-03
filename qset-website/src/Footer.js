import './footer.css';
import {mail, mapPin, phone, linkedin, facebook, Youtube, twitter} from "lucide-react";

const Footer = () => {
    return ( 
        <section className="footer">
            <div className="footer-box"> 
                <div className="footer-section">
                    <h3 className="footer-title">Contact Info</h3>

                </div>
                <div className="footer-section">
                    <h3 className="footer-title">Address</h3>
                </div>
                <div className="footer-section">
                    <h3 className="footer-title">Follow Us</h3>
                </div>
            </div>
            
        </section>
     );
}
 
export default Footer;