import './Menu_bar.css';
import { Link } from "react-router-dom";

const Menu_bar = (props) => {
    return ( 
        <div className={`${props.className} menu-bar`}>
            <Link to="/" className="menu-item">
                <img src="/qset_logo_image.png" alt="QSET Logo" className="menu-logo" />
            </Link>
            
            <div className="menu-items">
                <Link to="/rover" className="menu-item">Rover</Link>
                <Link to="/satellite" className="menu-item">Satellite</Link>
                <Link to="/exec" className="menu-item">Exec</Link>
                <Link to="/sponsors" className="menu-item">Sponsors</Link>
            </div>
        </div>

     );
}
 
export default Menu_bar;