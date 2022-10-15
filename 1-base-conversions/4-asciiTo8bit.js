const addZeros = require('../utils/addZeros');

// Translate the ASCII strings in the console.logs below to 8-bit binary strings
// Implement the imported helper function addZeros()
//    Read the export file for the explanation of how it works

/******************************************************************************/

const asciiTo8bit = str => {
  

  let bit8 = new Array

  for(let i = 0; i < str.length; i++){

    let num = str[i].charCodeAt()

   let bin = num.toString(2)
    bit8.push(addZeros(bin, 8))
  }
return bit8.join('') 

};

/******************************************************************************/

console.log(asciiTo8bit('123') === '001100010011001000110011');
// 00110001 00110010 00110011

console.log(asciiTo8bit('ABC') === '010000010100001001000011');
// 010000010100001001000011

console.log(asciiTo8bit('Hello, world!') === '01001000011001010110110001101100011011110010110000100000011101110110111101110010011011000110010000100001');
// 01001000011001010110110001101100011011110010110000100000011101110110111101110010011011000110010000100001

