'use strict';

const name = 'Snickers';
const age = 2;
const sentence = `My dog ${name} is ${age * 7} years old.`;
console.log({sentence});

// Template literals use ``
	// They allow you to pass in variables directly as oppossed to concatinating
	// Using ${varNamr} will place the variable within the ``
	// You can do math within template Literals

// The above example
const stringSentence = 'My dog ' + name + ' is ' + age * 7 + ' years old.';

console.log({stringSentence});
