'use strict';

// can use ES6 rest operator `...` to account for all of the values being passed in

// I did not know that you could pass `debugger` in and that would stop your code.

	// This is similar to putting a break in you dev tools

function highlight(strings, ...values) {

	let str = '';

	strings.forEach((string, i) => {
		str += `${string} <span contenteditable class="hl">${values[i] || ''}</span>`;
	});

	return str;

}

const name = 'Snickers';
const age = 100;

const sentence = highlight`My dog's name is ${name} and he is ${age} years old`;

document.body.innerHTML = sentence;
console.log({sentence});

// It is pretty cool that you can tag a template string to a function.
	// I don't really know where I would use this, but I'm sure there are many places this would prove beneficial.
	// The fact you can edit the manner in which the string is displayed is also pretty awesome.
