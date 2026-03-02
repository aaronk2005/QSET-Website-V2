import './Home.css';
import { Link } from "react-router-dom";
import {Handshake, Users} from "lucide-react";
import satelliteImage from './assets/satellite_image.jpg';
import teamPhoto from './assets/qset_team_photo.jpg';

const Home = () => {
    const handleClickJoin = () => {
        window.open("https://forms.cloud.microsoft/pages/responsepage.aspx?id=eCPPiRaKW0S_qx14hTcxIa-YdkxsEVNGjzUvsTTTT_VUOUU5Q1o3SFMzSzU4UEgzMTJCWDE3U05OWS4u&route=shorturl", "_blank");
    }

    return ( 
        <div className="home-page">
            <section className="hero-section" style={{ backgroundImage: `url(${satelliteImage})` }}>
                <div className="hero-overlay">
                    <h1 className="hero-title">Welcome to QSET</h1>
                    <p className="hero-description">Queens Space Engineering Team is Queens University’s student‑run space engineering team where almost 200 students design and build cutting‑edge rovers and satellites.</p>
                    <div className="hero-actions">
                         <button className="join-button" onClick={handleClickJoin}>
                            <Users className="button-icon"/>
                            <span>JOIN OUR TEAM</span>
                        </button>
                        <Link className="sponsor-button" to="/sponsors">
                            <Handshake className="button-icon"/>
                            <span>BECOME A SPONSOR</span>
                        </Link>
                    </div>
                   
                </div>
                
            </section>
            <section className="about-section">
                    <h2 className="section-title">ABOUT US</h2>
                    <img className="team-photo" src={teamPhoto} alt="QSET Team Photo"/>
                    <div className="information-container">
                        <p className="information-text">Founded in 2017, QSET has grown to become one of the largest student-run space engineering teams in Canada. With a focus on hands-on experience and innovation, QSET provides students with the opportunity to work on real-world projects and gain valuable skills in the field of space engineering.</p>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/TGma5p6oq3Y?si=2J0w3xF2T1gY6VfD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                    
                    </div>

            </section>
            <section className="join-info-section"></section>
        </div>
       
     );
}
 
export default Home;