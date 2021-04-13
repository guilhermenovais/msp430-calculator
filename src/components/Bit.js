import './Bit.css'

function Bit(props) {
    let color
    if(props.value) {
        color = "#C5DCF7"
    }
    else {color = "#ff8484"}

    return (
        <button style={{backgroundColor: `${color}`}} onClick={() => {props.onClick()}} 
        className="binary-digit">
            {props.value}
        </button>
    )
}

export default Bit;