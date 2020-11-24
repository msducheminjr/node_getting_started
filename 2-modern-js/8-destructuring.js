// const PI = Math.PI;
// const E = Math.E;
// const SQRT2 = Math.SQRT2;

const { PI, E, SQRT2 }  = Math;

// With require
const { readFile } = require('fs');


const circle = {
  label: 'circleX',
  radius: 2,
};

const circle2 = {
  label: 'circleY',
  radius: 2,
};

const circleArea = ({ radius }) =>
  (PI * radius * radius).toFixed(2);

console.log(
  circleArea(circle)
); // '12.57'


console.log(
  circleArea(circle2)
); // '66.48'

console.log(
  circleArea({foo: 42})
); // 'NaN'


// with optional default argument
const circleAreaPrecision = ({ radius }, { precision = 2 } = {}) =>
  (PI * radius * radius).toFixed(precision);

console.log(
  circleAreaPrecision(circle, { precision: 4 })
); // '12.5664'

