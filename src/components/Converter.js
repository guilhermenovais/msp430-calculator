import './Converter.css';
import Bit from "./Bit.js";
import HexaDigit from "./HexaDigit.js";

function Converter(props) {

    const bits = props.binaryNumbers[props.number][props.position]

    return (
        <div className="converter">
            <div className="bits" >
                <Bit className="bit3" value={bits[3]} onClick={() => props.changeBit(props.number,props.position,3)} />
                <Bit className="bit2" value={bits[2]} onClick={() => props.changeBit(props.number,props.position,2)} />
                <Bit className="bit1" value={bits[1]} onClick={() => props.changeBit(props.number,props.position,1)} />
                <Bit className="bit0" value={bits[0]} onClick={() => props.changeBit(props.number,props.position,0)} />
            </div>
            <div className="hexa">
                <HexaDigit 
                bit0={bits[0]}
                bit1={bits[1]}
                bit2={bits[2]}
                bit3={bits[3]} />
            </div>
        </div>
    )

}

export default Converter