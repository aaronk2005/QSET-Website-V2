import './Home.css';
import { Link } from "react-router-dom";
import {Handshake, Users, Star} from "lucide-react";
import satelliteImage from './assets/satellite_image.jpg';
import teamPhoto from './assets/qset_team_photo.jpg';
import cubesatImage from './assets/cubesat_image.png';


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
                            <span className="button-text">JOIN OUR TEAM</span>
                        </button>
                        <Link className="sponsor-button" to="/sponsors">
                            <Handshake className="button-icon"/>
                            <span className="button-text">BECOME A SPONSOR</span>
                        </Link>
                    </div>
                   
                </div>
                
            </section>
            <section className="about-section">
                    <h2 className="section-title">ABOUT US</h2>
                    <img className="team-photo" src={teamPhoto} alt="QSET Team Photo"/>
                    <div className="information-container">
                        <div className="video-container">
                            <iframe className="information-video" src="https://www.youtube.com/embed/TGma5p6oq3Y?si=2J0w3xF2T1gY6VfD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                    
                        </div>

                        <ul className="information-list">
                            <li>Founded in 2017, QSET has grown to become one of the largest student-run space engineering teams in Canada.</li>
                            <li>Our mission is to provide students with hands-on experience in designing, building, and testing space systems while fostering a collaborative and inclusive environment.</li>
                            <li>We have successfully launched multiple satellites and rovers, participating in prestigious competitions such as the Canadian Satellite Design Challenge (CSDC) and the University Rover Challenge (URC).</li>
                            <li>QSET is committed to promoting diversity and inclusion in STEM fields, actively recruiting members from various backgrounds and disciplines.</li>
                        </ul>
                    </div>

            </section>
            <section className="team-highlights-section">
                    <h2 className="section-title">TEAM HIGHLIGHTS</h2>
                    <div className="highlights-container">
                        <div className="highlight-box">
                            <div className="highlight-title-container">
                                <Star className="button-icon"/>
                                <h3 className="highlight-title">1st Place</h3>
                            </div>
                            
                            <p className="highlight-description">In 2024, QSET's satellite team won first place at the Canadian Satellite Design Challenge (CSDC), showcasing our innovative design and engineering skills.</p>
                        </div>
                        <div className="highlight-box">
                            <div className="highlight-title-container">
                                <Star className="button-icon"/>
                                <h3 className="highlight-title">Thingy</h3>

                            </div>
                            <p className="highlight-description">Our rover team reached the finals of the 2023 University Rover Challenge (URC), demonstrating exceptional performance in mobility, science, and engineering tasks.</p>
                        </div>
                        <div className="highlight-box">
                            <div className="highlight-title-container">
                                <Star className="button-icon"/>
                                <h3 className="highlight-title">Epic Launch</h3>
                            </div>
                            <p className="highlight-description">In 2022, our satellite team secured second place at the Canadian Satellite Design Challenge (CSDC), highlighting our strong engineering capabilities and dedication.</p>
                        </div>
                    </div>
            </section>
            <section className="subteams-section">
                    <h2 className="section-title">OUR SUBTEAMS</h2>
                    <div className="subteams-container">
                        <Link className="subteam-card" to="/rover">
                            <div className="image-container">
                                <img src={cubesatImage} alt="Cubesat" className="subteam-image" />
                            </div>
                            <h3 className="subteam-name">Rover Subteam</h3>
                            <p className="subteam-description">The Rover Subteam is responsible for the overall design, integration, and testing of our space systems, ensuring that all components work together seamlessly to achieve mission success. <br/> <br/>Click to learn more!</p>
                        </Link>
                        <Link className="subteam-card" to="/satellite">
                            <div className="image-container">
                                <img src={cubesatImage} alt="Cubesat" className="subteam-image" />
                            </div>
                            <h3 className="subteam-name">Satellite Subteam</h3>
                            <p className="subteam-description">The Satellite Subteam is responsible for designing, building, and testing our CubeSats, which are small satellites used for various space missions and research projects. <br/> <br/>Click to learn more!</p>
                        </Link>
                        
                        
                    </div>
            </section>
            <section className="sponsors-section">
                    <h2 className="section-title">OUR SPONSORS</h2>
                    <div className="sponsors-container">
                        <div className="sponsor-logo">sponsors will go here</div>
                    </div>
            </section>
            <section className="join-info-section" >
                    <h2 className="join-section-title">INTERESTED IN QSET?</h2>
                    <div className="join-boxes-container">
                        <div className="join-box">
                                <h3 className="join-box-title">Reasons to Join</h3>
                                <p className="join-box-content">Joining QSET offers a unique opportunity to gain hands-on experience in space engineering, collaborate with like-minded individuals, and contribute to exciting projects that push the boundaries of technology and innovation.</p>
                        </div>
                        <div className="join-box">
                                <h3 className="join-box-title">How to get Involved</h3>
                                <p className="join-box-content">To get involved with QSET, simply click <a href="https://forms.cloud.microsoft/pages/responsepage.aspx?id=eCPPiRaKW0S_qx14hTcxIa-YdkxsEVNGjzUvsTTTT_VUOUU5Q1o3SFMzSzU4UEgzMTJCWDE3U05OWS4u&route=shorturl" className="join-link">here</a> to fill out our interest form. We welcome students from all disciplines and levels of experience to join our team and contribute to our exciting projects.</p>
                        </div>
                    </div>
            </section>
        </div>
       
     );
}
 
export default Home;