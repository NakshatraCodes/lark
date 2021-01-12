
const {
    isLetter,
    isWhitespace,
    isNumber,
    isParenthesis,
    isQuote,
    isOpeningParenthesis, 
} = require("../helpers/dictionary");

const tokenize = (input) => {
    let cursor = 0;
    const tokens = [];
    let quoteCounter = 0;

    while (cursor < input.length) {

        const character = input[cursor];

        if (isWhitespace(character)) {
            cursor++;
            continue;
        }

        if (isParenthesis(character)) {
            tokens.push({
                type: isOpeningParenthesis(character) ? 'Opening Parenthesis' : 'Closing Parenthesis',
                value: character
            });
            cursor++;
            continue;
        }

        if (isNumber(character)) {
            let number = character;
            while (isNumber(input[++cursor])){
                number += input[cursor];
            }

            tokens.push({
                type: 'Number',
                value: parseInt(number, 10)
            });
            continue;
        }

        if (isLetter(character)) {
            let name = character;

            while (isLetter(input[++cursor])) {
                name += input[cursor];
            }

            tokens.push({
                type: 'Name',
                value: name
            });
            continue;
        }

        if (isQuote(character)) {
            let string = '';

            while (!isQuote(input[++cursor])) {
                string += input[cursor];
            }
            tokens.push({
                type: 'String',
                value: string
            });
            cursor++;
            continue;
        }

        else {
            tokens.push({
                type: 'Unidentified Character',
                value: character
            });
            cursor++;
            continue;
        }
    }

    return tokens;
}

module.exports = { tokenize };