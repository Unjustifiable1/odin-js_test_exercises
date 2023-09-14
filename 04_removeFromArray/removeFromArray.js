const removeFromArray = function(arr, ...theArgs) {
    // console.log(arr);
    // console.log(theArgs);

    let output = [];

    for (let i = 0; i < arr.length; i++) {
        if (theArgs.includes(arr[i]) == false) {
            output.push(arr[i]);
        }
    }

    console.log(output);
    return output;
};

// removeFromArray([1, 2, 3, 4], 3, 2);

// Do not edit below this line
module.exports = removeFromArray;
