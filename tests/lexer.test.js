const { tokenize } = require("../src/lexer");

const string = `function(234, "Add this stuff")`;
console.log(`Test Program: ${string}`);
const arr = tokenize(string);
console.log(arr);