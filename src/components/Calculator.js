import './Calculator.css'
import Conversor from './Conversor.js'
import Result from './Result.js'
import { useState } from 'react'

function Calculator() {
    let [binaryNumbers, setBinaryNumbers] = useState([
        //MSB: [3], LSB: [0]
        [[0, 0, 0, 0], [0, 0, 0, 0]], //First hexadecimal number of the operation
        [[0, 0, 0, 0], [0, 0, 0, 0]], //Second hexadecimal number of the operation
        [[0, 0, 0, 0], [0, 0, 0, 0]]]) //Operation result

    let [operation, setOperation] = useState("and")

    function updateOperation() { //Changes the current result and sets the operation state to the new operation
        let lista = [...binaryNumbers]
        if(operation=="and") {
            lista[2] = or(lista[0], lista[1])
        }
        if(operation=="or") {
            lista[2] = and(lista[0], lista[1])
        }
        setBinaryNumbers(lista)
        setOperation(document.getElementById("operation").value)
    }
    
    //num0: left number, num1: middle number, result: right number
    function and(num0, num1) { 
        let result = [[], []]
        result[0] = num0[0].map((bit0, index) => bit0&num1[0][index])
        result[1] = num0[1].map((bit1, index) => bit1&num1[1][index])
        return result
    }

    function or(num0, num1) {
        let result = [[], []]
        result[0] = num0[0].map((bit0, index) => bit0|num1[0][index])
        result[1] = num0[1].map((bit1, index) => bit1|num1[1][index])
        return result
    }
    
    function toggle(bit) {
        if (bit) {
            return 0
        }
        else {
            return 1
        }
    }

    function changeBit(number, position, bit) {
        //Creates a copy of the current binaryNumbers array and changes the bit that was clicked
        let lista = [...binaryNumbers]
        lista[number][position][bit] = toggle(binaryNumbers[number][position][bit])

        if(operation=="and") {
            lista[2] = and(lista[0], lista[1])
        }
        if(operation=="or") {
            lista[2] = or(lista[0], lista[1])
        }
        setBinaryNumbers(lista)
    }

    return (
        <div className="calculator">
            <div className="num0">
                <Conversor number={0} position={1} changeBit={changeBit} binaryNumbers={binaryNumbers}/>
                <Conversor number={0} position={0} changeBit={changeBit} binaryNumbers={binaryNumbers}/>
            </div>

            <select id="operation" onChange={updateOperation}>
                <option value="and">AND</option>
                <option value="or">OR</option>
            </select>

            <div className="num1">
                <Conversor number={1} position={1} changeBit={changeBit} binaryNumbers={binaryNumbers}/>
                <Conversor number={1} position={0} changeBit={changeBit} binaryNumbers={binaryNumbers}/>
            </div>

            <div className="equal">
                <div className="up"></div>
                <div className="down"></div>
            </div>

            <div className="num3">
                <Result number={2} position={1} binaryNumbers={binaryNumbers}/>
                <Result number={2} position={0} binaryNumbers={binaryNumbers}/>
            </div>
        </div>
    )
}

export default Calculator