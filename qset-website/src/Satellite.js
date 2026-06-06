import './Rover.css';
import satelliteImage from './assets/satellite-image.png';
import {Cog, CircuitBoard, Laptop, SatelliteDish, PlaneTakeoff, Package} from "lucide-react";
import satelliteTeamPhoto from './assets/satellite-team-photo.png';
import spaceSchoolPhoto from './assets/space-school-image.png';

const Satellite = () => {
    return(
        <div className="rover-page">
            <section className="rover-hero">
                <h2 className="title"> SATELLITE TEAM</h2>
                <div className="rover-info">
                    
                    <img src={satelliteImage} alt="satelliteImage" className="rover-image" />
                    <div className="rover-description">
                        <p className="info-text">
                            The Satellite team (QSAT) develops a 3U CubeSat to compete in the Canadian Satellite Design Challenge alongside other Canadian Universities with the aim of launching a satellite into space! The team has just finished its 2021-2023 competition cycle, finishing in third place and winning the outreach award. QSAT is aiming to compete in the CUBICS 2025 program with the Canadian Space Agency.
                        </p>
                        <p className="info-text">
                            The team consists of 6 sub-teams: Communications, Electrical Power System (EPS), Attitude Determination & Control System (ADCS), Mechanical, and Payload which together form a functional satellite. Projects are often multidisciplinary and sub-teams consist of students from all programs and backgrounds. QSAT also runs the Space School program, aimed at first years, to provide students with the essential skills and knowledge needed to start designing satellites. New team members are welcome to join the team directly or via Space School.                         </p>
                    </div>
                </div>
            </section>
            <section className="rover-subteams">
                <h2 className="subteams-title">SPACE SCHOOL</h2>
                <div className="information-container">
                    <ul className="information-list">
                        <li>The fifth annual Space School will run during the 2023–2024 academic year</li>
                        <li>It is open to all students interested in joining the QSET Satellite team.</li>
                        <li>The program is geared toward first-year students, but students in any year or program are welcome.</li>
                        <li>Weekly sessions will let students build a small experiment designed to go to space.</li>
                        <li>There is also a chance to launch the experiment into the stratosphere on a high-altitude balloon.</li>
                        <li>Students will learn skills such as GitHub, Arduinos, circuits, soldering, PCB design, CAD, 3D printing, and space environment design.</li>
                    </ul>
                    <div className="video-container">
                        <img src={spaceSchoolPhoto} alt="spaceSchool" className="information-video" />
                    </div>  
                </div>
                
            </section>
            <section className="rover-subteams">
                <h2 className="subteams-title">SATELLITE SUBTEAMS</h2>
                <div className="subteam-row">
                    <div className="subteam-box">
                        <Cog className="subteam-icon"></Cog>
                        <div className="subteam-description"> 
                            <h3 className="subteam-name">Mechanical System</h3>
                            <p className="subteam-text">The Mechanical system includes all components in the physical structure of the CubeSat. The Mechanical team is responsible for overseeing the CAD modeling, machining, and 3D printing for all designs. They must also assist with sub-system integration and provide design support for the other sub-team projects. They are additionally responsible for using Computer-Aided Design for thermal and force analysis for the satellite.</p>
                        </div>
                    </div>
                    <div className="subteam-box">
                        <CircuitBoard className="subteam-icon"></CircuitBoard>
                        <div className="subteam-description"> 
                            <h3 className="subteam-name">Electrical Power System (EPS)</h3>
                            <p className="subteam-text">The Electric Power System (EPS) generates, stores, and distributes power to the satellite. The EPS is a solar rechargeable lithium-ion battery system that creates enough power to support the satellite during operation. The system must take into consideration hazards to ensure safe and reliable operations of the power supply. </p>
                        </div>
                    </div>
                </div>
                <div className="subteam-row">
                    <div className="subteam-box">
                        <Laptop className="subteam-icon"></Laptop>
                        <div className="subteam-description"> 
                            <h3 className="subteam-name">Onboard Computer System (OBC)</h3>
                            <p className="subteam-text">The Onboard Computer (OBC) is the main computer and network that manages all the other subsystems on the QSET Satellite. The system involves working with microprocessors, memory banks, and interfacing chips to build and connect the computer to other sub-systems to perform the necessary tasks of the satellite.</p>
                        </div>
                    </div>
                    <div className="subteam-box">
                        <Package className="subteam-icon"></Package>
                        <div className="subteam-description"> 
                            <h3 className="subteam-name">Payload System</h3>
                            <p className="subteam-text">The Payload is the primary reason for the satellite to go to space. All other subsystems exist to support the payload in performing its mission. Past missions include an earth observation mission where the primary payload is a custom camera system to take a low-resolution picture of Earth. The payload team is currently working to redesign their payload for the CUBICS 2025 project.</p>
                        </div>
                    </div>
                    <div className="subteam-box">
                        <SatelliteDish className="subteam-icon"></SatelliteDish>
                        <div className="subteam-description"> 
                            <h3 className="subteam-name">Communications System</h3>
                            <p className="subteam-text">The Communications team oversees the design of a duplex communication system to communicate between a ground station and QSET’s satellite. The Communications system utilizes various microcontrollers, transceivers, amplifiers, filters, and antennas to build this system under the mechanical and electrical constraints of a 3U CubeSat.</p>
                        </div>
                    </div>
                    <div className="subteam-box">
                        <PlaneTakeoff className="subteam-icon"></PlaneTakeoff>
                        <div className="subteam-description"> 
                            <h3 className="subteam-name">Altitude Conrol and Determination System (ADCS)</h3>
                            <p className="subteam-text">The Altitude Determination and Control System (ADCS) determines and controls the satellite’s orientation in space. The system includes a wide array of sensors and actuators, such as an inertial measurement unit with a gyroscope, accelerometer, and magnetometer, photodiode based coarse angle sun sensors, EC motor reaction wheels, and a magnetorquer.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <img src={satelliteTeamPhoto} alt="satelliteTeam" className="rover-team-photo" />
            </section>
        </div>
    );
     
}
 
export default Satellite;