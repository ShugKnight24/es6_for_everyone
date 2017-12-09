'use strict';

const cuts = ['Chuck', 'Brisket', 'Shank', 'Short Rib'];

// `entries()` gives you the `ArrayIterator`

// const meat = cuts.entries();
// console.log({meat});
// console.log(meat.next());

// `.next()` will give you two values
// `done`: whether it has completed looping over the iterable
// `value`: gives you the index and the value of that index position

// `cut.entries()` will give you an array
// You can immediately destructure them
// This is pretty neat!

for (const [i, cut] of cuts.entries()) {
	console.log(`${cut} is the ${i + 1} item`);
}

// don't know how many arguments will be passed into this function
// `arguments` is
function addUpNumbers() {

	// arguments is not really an array
	// console.log({arguments});

	let total = 0;
	for (const num of arguments) {
		total += num;
	}
	console.log({total});
	return total;
}

addUpNumbers(10,23,52,34,12,13,123);

// Using for of with strings

const name = 'Wes Bos';
for (const char of name) {
	console.log(char);
}

// can use for of to loop over a node list

const ps = document.querySelectorAll('p');
for (const paragraph of ps) {
	paragraph.addEventListener('click', function() {
		console.log(this.textContent);
	});
}
