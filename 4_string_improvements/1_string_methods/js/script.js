'use strict';

const course = 'RFB2';
const flightNumber = '20-AC2018-jz';
const accountNumber = '825242631RT0001';

const make = 'BMW';
const model = 'x5';
const colour = 'Royal Blue';

// 4 New string methods in ES6

// .startsWith()
// checks to see if string starts with the characters passed in

course.startsWith('RFB'); // true

// is case sensitive
course.startsWith('rfb'); // false

flightNumber.startsWith('AC', 3); // true
// starts at 3rd position (0 indexed) and looks for 'AC'

// .endsWith()
// checks to see if string ends with the characters passed in

flightNumber.endsWith('jz'); // true

accountNumber.endsWith('RT'); // false

accountNumber.endsWith('RT', 11); // true
// only looks at first 11 positions
// useful for repeating patterns

// .includes()
// checks to see if strings contains characters passed in

flightNumber.includes('AC'); // true

// .repeat()
// Repeats a string how ever many times you specify
console.log('hi '.repeat(10));

// Make a leftPad function
function leftPad(str, length = 20) {
	return `→ ${' '.repeat(length - str.length)}${str}`;
}

console.log(leftPad(make));
console.log(leftPad(model));
console.log(leftPad(colour));

console.log(`${'Herro' * 5}`.repeat(10) + ' Batman!');

// Do you get it ?
