// Symbols are the 7th primitive type added to JavaScript

// Previous 6 were:
// 1) Strings
// 2) Numbers
// 3) Booleans
// 4) Objects
// 5) Null
// 6) Undefined

// Symbols are absolutely unique
// PRevents naming collisions

const wes = Symbol('Wes');
const person = Symbol('Wes');
// wes !== person

const classRoom = {
	[Symbol('Mark')] : { grade: 50, gender: 'male' },
	[Symbol('olivia')]: { grade: 80, gender: 'female' },
	[Symbol('olivia')]: { grade: 80, gender: 'female' },
};

// symbols prevent the 2 olivias from being overwritten

// Cannot loop over symbols
// Often why private data is stored in symbols
for (const person in classRoom) {
	console.log(person);
}

// you can use `getOwnPropertySymbols()` to return
// symbols in this case are just property keys
// Need to return the data associated with each symbol
const syms = Object.getOwnPropertySymbols(classRoom);
const data = syms.map(sym => classRoom[sym]);
console.log(data);
