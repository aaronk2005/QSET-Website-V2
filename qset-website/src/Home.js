import './Home.css';

const Home = () => {
    return ( 
        <div>
            <div className="home-container">
                <img src="/2024-07-24-qset-with-rover.jpg" alt="QSET image" className="team-image" />
                <div className="home-text"> Queen's Space Engineering Team<br/>
                    <button className="join-button">Join</button>
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