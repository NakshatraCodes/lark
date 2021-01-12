const { tokenize } = require("../src/lexer");

const string = "add(23567 2353)";
console.log(`Test Program: ${string}`);
const arr = tokenize(string);
console.log(arr);