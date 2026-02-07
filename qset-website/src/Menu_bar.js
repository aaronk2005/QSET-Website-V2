import './Menu_bar.css';

const Menu_bar = (props) => {
    return ( 
        <div className={`${props.className} menu-bar`}>
            <img src="/qset_logo_image.png" alt="QSET Logo" className="menu-logo" />
            <div className="menu-items">
                <div className="menu-item">Rover</div>
                <div className="menu-item">Satellite</div>
                <div className="menu-item">Exec</div>
                <div className="menu-item">Sponsors</div>
            </div>
        </div>

     );
}
 
export default Menu_bar;