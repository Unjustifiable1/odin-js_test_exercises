const fibonacci = function(pos) {
    if (pos < 0) return 'OOPS';

    let fibSeries = [0, 1, 1];
    for (let i = 3; i <= pos; i++) {
        fibSeries.push(fibSeries[i-2] + fibSeries[i-1]);
    }
    
    return fibSeries[fibSeries.length - 1];
}

// Do not edit below this line
module.exports = fibonacci;


// series start as [0, 1, 1]

// calc fibonacci up to requested position (n)

// call requested position at series position e.g. series[n] 