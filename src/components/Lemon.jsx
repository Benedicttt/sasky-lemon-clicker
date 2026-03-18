import lemon from '../assets/lemon-svgrepo-com.svg'

function Lemon(props) {
    return (
        <div className="lemon">
            <img src={lemon} alt="lemon" onClick={props.onClick} />
        </div>
    )
}
export default Lemon