import './Home.css';
import { Link } from "react-router-dom";

const Home = () => {
    const handleClickJoin = () => {
        window.open("https://forms.cloud.microsoft/pages/responsepage.aspx?id=eCPPiRaKW0S_qx14hTcxIa-YdkxsEVNGjzUvsTTTT_VUOUU5Q1o3SFMzSzU4UEgzMTJCWDE3U05OWS4u&route=shorturl", "_blank");
    }

    return ( 
        <div className="home-page">
            <div className="home-container">
                <img src="/2024-07-24-qset-with-rover.jpg" alt="QSET image" className="team-image" />
                <div className="home-text"> Queen's Space Engineering Team<br/>
                <div className="home-subtext">Building rovers and satellites for international design competitions</div>
                    <div className="cta-buttons">
                        <button className="join-button" onClick={handleClickJoin}>Join</button>
                        <Link to="/sponsors" >
                            {<button className="join-button">Sponsor</button>}
                        </Link>
                        
                    </div>
                </div>  
            </div>
            <section className ="about-section">
                <h2 className="about-header">Who Are We?</h2>
                <div className="about-video-container">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/TGma5p6oq3Y?si=1234567890"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </div>
            </section>
            
            </div>
       
     );
}
 
export default Home;