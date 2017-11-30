'use strict';

// You can set default values for parameters in ES6
function calculateBill(total, tax = 0.13, tip = 0.15) {
  return total + (total * tax) + (total * tip);
}

// const totalBill = calculateBill(100)

// You can't leave a parameter empty, but you can pass in undefined and the default argument will be used
const totalBill = calculateBill(100, undefined, 0.25);
console.log(totalBill);
