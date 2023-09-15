const palindromes = function (str) {
    str = str.toLowerCase();
    let inputChars = str.split("");
    let startChars = [];
    let endChars = [];

    for (let i = 0; i < inputChars.length; i++) {
        if (inputChars[i].match("^[a-z0-9]+$")) {
            startChars.push(inputChars[i]);
            endChars.unshift(inputChars[i]);
        }
    }
    return (startChars.toString() == endChars.toString());
};

// Do not edit below this line
module.exports = palindromes;
