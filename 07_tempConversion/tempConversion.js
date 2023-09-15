const convertToCelsius = function(fart) {
  // 5/9(F-32)
  return parseFloat((5 / 9 * (fart - 32)).toFixed(1));
};

const convertToFahrenheit = function(cels) {
  // C × (9/5) + 32
  // return (cels * (9 / 5) + 32).toFixed(1);
  return parseFloat((cels * (9 / 5) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
