import shortenNumber from "../utils/shortenNumber.jsx";

function Balance(props) {

    const total = shortenNumber(props.total)

    return (
        <div className="balance">
            <div>lemons</div>
            <div className="balance_total">{total}</div>
        </div>
    )

}

export default Balance