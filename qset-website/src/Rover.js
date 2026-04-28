import './Rover.css';
import roverImage from './assets/rover_image.png';
import {Clipboard, Cog, TestTubeDiagonal, CircuitBoard} from "lucide-react";
import roverTeamPhoto from './assets/rover-team-photo.jpg';

const Rover = () => {
    return(
        <div className="rover-page">
            <h2 className="title"> ROVER TEAM</h2>
            <section className="rover-info">
                
                <img src={roverImage} alt="roverImage" className="rover-image" />
                <div>
                    <p className="info-text">
                        The Rover team builds a mock Mars rover that competes in Hanksville, Utah at the University Rover Challenge at the Mars Desert Research Station. The team consists of three major sub-teams, ECE team (Software and hardware), Mechanical team, and Science team. Each team focuses on different systems of the rover in collaboration with the other teams.
                    </p>
                    <p className="info-text">
                        Members are involved in the design and manufacture of all required components and systems of the rover. The rover must be able to navigate autonomously through rough terrain, operate a dexterous robotic arm, use in-situ scientific tests to detect life, and more. With such a versatile range of projects available, team members are sure to find something that interests them. No experience is required to join, and members are free to select their sub-team of interest.
                    </p>
                </div>
            </section>
            <section className="rover-subteams">
                <h2 className="subteams-title">ROVER SUBTEAMS</h2>
                <div className="subteam-row">
                    <div className="subteam-box">
                        <Cog className="subteam-icon"></Cog>
                        <div> 
                            <h3 className="subteam-name">Mechanical</h3>
                            <p className="subteam-text">Work on designing and manufacturing the mechanical components of the rover. The main projects this year are the suspension redesign, new chassis design, and modifications to the robotic arm. </p>
                        </div>
                    </div>
                    <div className="subteam-box">
                        <CircuitBoard className="subteam-icon"></CircuitBoard>
                        <div> 
                            <h3 className="subteam-name">Electrical and Software</h3>
                            <p className="subteam-text">Work on projects that cover power systems, mechatronics, control systems, autonomous navigation, machine learning, printed circuit board (PCB) manufacturing, and more. </p>
                        </div>
                    </div>
                </div>
                <div className="subteam-row">
                    <div className="subteam-box">
                        <TestTubeDiagonal className="subteam-icon"></TestTubeDiagonal>
                        <div> 
                            <h3 className="subteam-name">Science</h3>
                            <p className="subteam-text">Design methods for remotely detecting extraterrestrial life and determining habitability of planets. Gain useful experience in scientific research methods and experiment design.</p>
                        </div>
                    </div>
                    <div className="subteam-box">
                        <Clipboard className="subteam-icon"></Clipboard>
                        <div> 
                            <h3 className="subteam-name">Operations and Logistics</h3>
                            <p className="subteam-text">Curious to know what goes into the operations of a large competitive design team? Within the logistics team, there are opportunities to work in finance, marketing, industry relations, and general team logistic projects.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <img src={roverTeamPhoto} alt="roverTeam" className="rover-team-photo" />
            </section>
        </div>
    );
     
}
 
export default Rover;