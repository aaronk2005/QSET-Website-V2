import './MenuBar.css';
import { NavLink } from "react-router-dom";
import { useState } from "react";

const MenuBar = (props) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return ( 
        <nav className={`${props.className} menu-bar`}>
    
            <NavLink to="/" >
                <img src="/qset_logo_image_white.png" alt="QSET Logo" className="menu-logo" />
            </NavLink>

            <button
                className="hamburger-button"
                aria-label="Toggle navigation menu"
                aria-expanded={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
                type="button"
            >
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
            </button>
            
            <div className={`menu-items ${isMobileMenuOpen ? "open" : ""}`}>
                <NavLink to="/" onClick={closeMobileMenu} className={({ isActive }) => "menu-item" + (isActive ? " active" : "")}>Home</NavLink>
                <NavLink to="/rover" onClick={closeMobileMenu} className="menu-item">Rover</NavLink>
                <NavLink to="/satellite" onClick={closeMobileMenu} className="menu-item">Satellite</NavLink>
                <NavLink to="/exec" onClick={closeMobileMenu} className="menu-item">Exec</NavLink>
                <NavLink to="/sponsors" onClick={closeMobileMenu} className="menu-item">Sponsors</NavLink>
            </div>
        </nav>

     );
}
 
export default MenuBar;