import './Conversor.css';
import Bit from "./Bit.js";
import HexaDigit from "./HexaDigit.js";
import { useState } from "react";

function Conversor() {

    let [binaryNumber, setBinaryNumber] = useState([0, 0, 0, 0])

    function toggle(bit) {
        if (bit) {
            return 0
        }
        else {
            return 1
        }
    }

    function mudarBit(posicao) {
        let lista = [...binaryNumber]
        lista[posicao] = toggle(binaryNumber[posicao])
        setBinaryNumber(lista)
        console.log(binaryNumber)
    }

    return (
        <div className="conversor">
            <div className="bits" >
                <Bit className="bit3" onClick={() => mudarBit(3)} />
                <Bit className="bit2" onClick={() => mudarBit(2)} />
                <Bit className="bit1" onClick={() => mudarBit(1)} />
                <Bit className="bit0" onClick={() => mudarBit(0)} />
            </div>

            <h1>{binaryNumber}</h1>
        </div>
    )

}

export default Conversor