'use strict';

// ... can be spread, but it can also be rest

function convertCurrency(rate, tax, tip, ...amounts) {
	console.log(rate, tax, tip, amounts);
	return amounts.map(amount => amount * rate);
}

// rate = 1.54
// tax = 10
// tip = 23
// rest are the amounts
const amounts = convertCurrency(1.54, 10, 23, 52, 1, 56);
console.log(amounts);

// Using ...rest when destructuring
const runner = ['Wes Bos', 123, 5.5, 5, 3, 6, 35];
const [name, id, ...runs] = runner;
console.log(name, id, runs);

const team = ['Wes', 'Kait', 'Lux', 'Sheena', 'Kelly'];
const [captain, assistant, ...players] = team;
console.log(captain, assistant, players)
