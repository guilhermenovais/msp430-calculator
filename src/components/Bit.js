import './Bit.css'
import { useState } from "react";

function Bit(props) {
    let [valor, mudarValor] = useState(0)

    function toggle() {
        if (valor) {
            mudarValor(0)
        }
        else {
            mudarValor(1)
        }
    }

    return (
        <div className="binary-digit">
            <button onClick={toggle}>{valor}</button>
        </div>
    )
}

export default Bit;