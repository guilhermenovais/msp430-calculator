import './Bit.css'
import { useState } from "react";

function Bit(props) {
    return (
        <button onClick={props.onClick} className="binary-digit">
            {props.value}
        </button>
    )
}

export default Bit;