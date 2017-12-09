'use strict';

/* eslint-disable */

Array.prototype.shuffle = function() {
	var i = this.length, j, temp;
	if ( i == 0 ) return this;
	while ( --i ) {
		j = Math.floor( Math.random() * ( i + 1 ) );
		temp = this[i];
		this[i] = this[j];
		this[j] = temp;
	}
	return this;
};

const cuts = ['Chuck', 'Brisket', 'Shank', 'Short Rib'];

cuts.shop = 'MM MEats';

// regular for loop
// Wes says that these can be confusing
	// I don't know if I necessarily agree
	// For loops can definitely get confusing when complex
	// He also says he doesn't particularly enjoy the syntax

// for (let i = 0; i < cuts.length; i++) {
// 	console.log(cuts[i]);
// }

// `forEach()`
// Can't abort the loop -> Can't use a `break` within a `forEach()`
// Can't skip over any item -> can't use `continue` within a `forEach()`

// cuts.forEach((cut) => {
// 	console.log(cut);
// 	if(cut === 'Brisket') {
// 		continue;
// 	}
// });

// for in loop
// includes things that have been added / modified to the prototype

// for (const index in cuts) {
// 	console.log(cuts[index]);
// }

// the for of loop can be used to iterate over data that is an iterable
// Can't use for of with objects
// Will only show the things you are iterating over even if you've modified the prototype
// can `break` and `continue` within a for of loop

for (const cut of cuts) {
	if (cut === 'Brisket') {
		continue;
	}
	console.log(cut);
}
