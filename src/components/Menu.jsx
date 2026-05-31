import { NavLink } from "react-router"
import iconLemon from '../assets/img/lemon-svgrepo-com .svg'
import iconPackage from '../assets/img/package-svgrepo-com.svg'
import iconSettings from '../assets/img/settings-svgrepo-com.svg'

function Menu(props) {

    return (
        <div className="menu">
            <div>
                <NavLink to="/" viewTransition><img src={iconLemon} alt="main" /></NavLink>
            </div>
            <div>
                <NavLink to="/store" viewTransition>

                <img src={iconPackage} alt="store" />
                    { props.items ? <span className="menu_badge">{props.items}</span> : null }
                </NavLink>
            </div>
            <div>
                <NavLink to="/settings" viewTransition>
                    <img src={iconSettings} alt="settings" /></NavLink>
            </div>
        </div>
    )

}

export default Menu