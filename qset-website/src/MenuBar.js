import './MenuBar.css';
import { NavLink } from "react-router-dom";

const MenuBar = (props) => {
    return ( 
        <nav className={`${props.className} menu-bar`}>
    
            <NavLink to="/" >
                <img src="/qset_logo_image_white.png" alt="QSET Logo" className="menu-logo" />
            </NavLink>
            
            <div className="menu-items">
                <NavLink to="/" className={({ isActive }) => "menu-item" + (isActive ? " active" : "")}>Home</NavLink>
                <NavLink to="/rover" className="menu-item">Rover</NavLink>
                <NavLink to="/satellite" className="menu-item">Satellite</NavLink>
                <NavLink to="/exec" className="menu-item">Exec</NavLink>
                <NavLink to="/sponsors" className="menu-item">Sponsors</NavLink>
            </div>
        </nav>

     );
}
 
export default MenuBar;