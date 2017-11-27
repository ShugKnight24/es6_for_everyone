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

const fullNames4 = names.map(name => `${name} bos`);

const fullNames5 = names.map(() => `cool bos`);

const sayMyName = (name) => {
	alert(`Hello ${name}!`);
}

sayMyName('Wes');
