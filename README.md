# MSP430 Calculator

  

## About

  

This is a simple React.js app that does simple bitwise operations to help on the development of C algorithms for MSP430 projects. It can do 4 basic bitwise operations: AND (&), OR(|), Exclusive OR (^) and NOT (~).

The operations are made between two bytes (two sets of eight bits). The first bit of the first byte is operated with the first bit of the second byte and the result is shown in the first bit of the "result" byte, and so on.

This app also converts each set of 4 bits to it's equivalent hexadecimal digit.

## Instalation and Usage

Clone this repository using

````git clone https://github.com/guilhermenovais/msp430calculator.git````

Then, inside the project's folder, install the project dependencies using:

```npm install```

Now you can both use

```npm run start```

or

```npm run build```
```npm install serve```
```serve -s build```

to see the project on the browser.
     
## How does it work

The project consists of 5 React Components: Calculator, Converter, Result, HexaDigit and Bit. 
The Calculator holds all the bits' values in the binaryNumbers state, which is an array with 3 arrays inside it. Each inner array represents a byte. After a bit is clicked or the operation is changed, the binaryNumber array is replaced with one that has the updated values of the bits.
This array is passed as a prop to the Coverters and to the Result components. Both pass the values inside the array as a prop to the respective Bits and to the HexaDigits, which display it in the screen.
The Calculator also holds the functions that are called when the Bits are clicked by the user and the function that is called when the operation is changed or when the NOT button is clicked.