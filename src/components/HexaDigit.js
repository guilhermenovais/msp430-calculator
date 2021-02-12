import { useState } from "react";
import './HexaDigit.css'

function binaryToHexa(bit3, bit2, bit1, bit0) {
    const number = `${bit0}${bit1}${bit2}${bit3}`
    switch (number) {
        case '0000':
            return "0";
        case '0001':
            return "1";
        case '0010':
            return "2";
        case '0011':
            return "3";
        case '0100':
            return "4";
        case '0101':
            return "5";
        case '0110':
            return "6";
        case '0111':
            return "7";
            break
        case '1000':
            return "8";
        case '1001':
            return "9";
        case '1010':
            return "A";
        case '1011':
            return "B";
        case '1100':
            return "C";
        case '1101':
            return "D";
        case '1110':
            return "E";
        case '1111':
            return "F";
    }
}

function HexaDigit(props) {
    let hexa = binaryToHexa(props.bit0, props.bit1, props.bit2, props.bit3)

    return (
        <div className="hexa-digit">
            <p>{hexa}</p>
        </div>
    )
}

export default HexaDigit