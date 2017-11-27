'use strict';

const names = ['wes', 'kait', 'lux'];

const fullNames = names.map(function(name) {
	return `${name} bos`;
});

const fullNames2 = names.map((name) => {
	return `${name} bos`;
});

const fullNames3 = names.map(name => {
	return `${name} bos`;
});

// If you have one parameter, you can remove the parantheses that surround it.

const fullNames4 = names.map(name => `${name} bos`);

// Implicit return
// Assumes that you are returning that value

const fullNames5 = names.map(() => `cool bos`);

// If no parameters, you must pass empty parantheses

const sayMyName = (name) => {
	alert(`Hello ${name}!`);
}

// Arrow functions are anonymous, but you can place them into variables

sayMyName('Wes');
