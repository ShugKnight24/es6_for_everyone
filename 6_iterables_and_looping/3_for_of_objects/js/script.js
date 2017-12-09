'use strict';

const apple = {
	color: 'Red',
	size: 'Medium',
	weight: 50,
	sugar: 10
};

// Can't use for of with an object

// for (const prop of apple) {
// 	console.log(prop);
// }

// Can't use entries either, but this is a feature that is going to be added to ES2017

// for (const prop of apple.entries()) {
// 	console.log(prop);
// }

// can use Object.keys

// for (const prop of Object.keys(apple)) {
// 	const value = apple[prop];
// 	console.log(prop, value);
// }

// Using a for in loop

for (const prop in apple) {
	const value = apple[prop];
	console.log(value, prop);
}
