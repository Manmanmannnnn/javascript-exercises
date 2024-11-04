const convertToCelsius = function(bodyTemp) {
  let converter=(bodyTemp-32)*5/9;
  return Number(converter.toFixed(1));
};
console.log(convertToCelsius(100));
const convertToFahrenheit = function(bodyTemp) {
  let converter=(bodyTemp*9/5)+32;
  return Number(converter.toFixed(1));
};
console.log(convertToFahrenheit(100));
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

// toFixed converts number to string