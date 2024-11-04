const palindromes = function (str) {
const lettersAndNumbers='abcdefghijklmnopqrstuvwxyz0123456789';

const cleanString=str.toLowerCase().split("").filter((char)=>lettersAndNumbers.includes(char)).join("");
const reverseString=cleanString.split("").reverse().join("");
return cleanString===reverseString
};


// Do not edit below this line
module.exports = palindromes;
