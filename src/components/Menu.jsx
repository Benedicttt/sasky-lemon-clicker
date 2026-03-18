import iconLemon from '../assets/img/lemon-svgrepo-com .svg'
import iconPackage from '../assets/img/package-svgrepo-com.svg'
import iconSettings from '../assets/img/settings-svgrepo-com.svg'

function Menu(props) {

    return (
        <div className="menu">
            <div>
                <img src={iconLemon} alt="main" />
            </div>
            <div>
                <img src={iconPackage} alt="store" />
                { props.items ? <span className="menu_badge">{props.items}</span> : null }
            </div>
            <div>
                <img src={iconSettings} alt="settings" />
            </div>
        </div>
    )

}

export default Menu