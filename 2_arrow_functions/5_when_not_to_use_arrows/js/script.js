'use strict';

// When you really need `this`
const button = document.querySelector('#pushy');

// Can't use an arrow function here or `this` would be bound to the window

// button.addEventListener('click', () => {
// 	console.log(this);
// 	this.classList.toggle('on');
// });

button.addEventListener('click', function() {
	console.log(this);
	this.classList.toggle('on');
});

// When you need a method to bind to an object

// can't use an arrow function here either or `this` would be bound to the window again

// const person = {
// 	points: 23,
// 	score:() => {
// 		console.log(this);
// 		this.points++;
// 	}
// }

const person = {
	points: 23,
	score() {
		console.log(this);
		this.points++;
	}
}

// when you have a method on an object, you can just set the function name without setting the property.

// When you need to add a prototype method
class Car {
	constructor(make, colour) {
		this.make = make;
		this.colour = colour;
	}
}

const beemer = new Car('BMW', 'blue');
const subie = new Car('Subaru', 'white');

// Can't use an arrow function here or `this` would be bound to the window

// Car.prototype.summarize = () => {
// 	return `This car is a ${this.make} in the colour ${this.colour}`;
// };

Car.prototype.summarize = function() {
	return `This car is a ${this.make} in the colour ${this.colour}`;
};

// When you need arguments object

// Can't use arrow function here because you won't have access to the arguments object

// const orderChildren = () => {
// 	const children = Array.from(arguments);
// 	return children.map((child, i) => {
// 		return `${child} was child #${i + 1}`;
// 	})
// 	console.log(arguments);
// }

const orderChildren = function() {
	const children = Array.from(arguments);
	return children.map((child, i) => {
		return `${child} was child #${i + 1}`;
	})
	console.log(arguments);
}
