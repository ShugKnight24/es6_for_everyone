'use strict';

function convertCurrency(amount) {
	const converted = {
		USD: amount * 0.76,
		GPB: amount * 0.53,
		AUD: amount * 1.01,
		MEX: amount * 13.30
	};
	return converted;
}

// const hundo = convertCurrency(100);
// console.log({hundo});

// This technique returns all of the different currency types in an object
// to access a specific one you could...

// console.log(hundo.USD);

// You can return multiple values through destructuring
// The order of the values is irrelevant
// You don't need to destructure all of the values either

// const { USD, GPB, AUD, MEX } = convertCurrency(100);

// now you can access each individual value

// console.log({USD});
// console.log({GPB});
// console.log({AUD});
// console.log({MEX});

// Default values
// since the defaults are wrapped in {}
// They get destructured into three variables
// The order that they get passed into the function is no longer important
// function tipCalc({ total = 100, tip = 0.15, tax = 0.13 }) {
// 	return total + (tip * total) + (tax * total);
// }
//
// const bill = tipCalc({ tip: 0.20, total: 200 });
// console.log(bill);


// In this final example, you can default the value to a blank object
// If you call the function without any parameteres, it can use all of the default values
function tipCalc({ total = 100, tip = 0.15, tax = 0.13 } = {}) {
	return total + (tip * total) + (tax * total);
}

const bill = tipCalc();
console.log(bill);
