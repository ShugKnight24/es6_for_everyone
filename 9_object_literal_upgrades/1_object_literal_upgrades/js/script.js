'use strict';

const first = 'snickers';
const last = 'bos';
const age = 2;
const breed = 'King Charles Cav';

// if the property name and the variable name you are setting are the same, you do not have to set a key // value pair
// You can give new names to keys like `firstName`

const dog = {
	firstName: first,
	last,
	age,
	breed,
	pals: ['Hugo', 'Sunny']
};

console.log(dog);

const modal = {
	// Same as `create: function(){}`
	create(selector) {

	},
	open(content) {

	},
	close(goodbye) {

	}
}

function invertColor(color) {
	return '#' + ("000000" + (0xFFFFFF ^ parseInt(color.substring(1),16)).toString(16)).slice(-6);
}

const key = 'pocketColor';
const value = '#ffc600';

// computed property names using template literals

const tShirt = {
	[key]: value,
	[`${key}Opposite`]: invertColor(value)
};

// This is really nifty
	// You iterate through the arrays and shift off the first element
const keys = ['size', 'color', 'weight'];
const values = ['medium', 'red', 100];

const shirt = {
	[keys.shift()]: values.shift(),
	[keys.shift()]: values.shift(),
	[keys.shift()]: values.shift(),
}
console.log(shirt);
