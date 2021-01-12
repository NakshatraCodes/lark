
const {
    isLetter,
    isWhitespace,
    isNumber,
    isParenthesis,
    isQuote, 
} = require("../helpers/dictionary");

const tokenize = (input) => {
    let cursor = 0;
    const tokens = [];

    while (cursor < input.length) {
        // Logic
    }

    return tokens;
}

module.exports = { tokenize };