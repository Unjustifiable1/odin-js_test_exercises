const repeatString = function(string, num) {
    if (num >= 0) {
        let output = "";
        for (let i = 0; i < num && i >= 0; i++) {
            output += string;
        }
        return output;
    } else return 'ERROR';
};

// Do not edit below this line
module.exports = repeatString;
