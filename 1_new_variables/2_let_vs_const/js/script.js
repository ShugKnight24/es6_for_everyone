'use strict';

const key = 'abc123';
let points = 50;
// let points = 60; // will not work as there is already a points variables in this scope
// can only declare one variable of the same name using let within a particular scope

let winner = false;

if (points > 40) {
	console.log('test');
	let winner = true;
	// let only sets the variable winner to true in the scope of the if
	// let is block scoped
}

// as the name somewhat implies, const variables cannot be updated
// let variables still can be updated

const person = {
	name: 'Wes',
	age: 28
}

// the properties of a constant variables can be reassgined

person.name = 'Shugmi';
person.age = 27;

console.log(person);

const wes = Object.freeze(person);

// Object.freeze makes the state of an object immutable.
