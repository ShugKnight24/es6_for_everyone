'use strict';

{
	const name = 'wes';
	console.log(name);
}

// This block scoping removes the need to use IIFEs for scoping

for (let i = 0; i < 10; i++) {
	console.log(i);
	setTimeout(function() {
		console.log('The number is ' + i);
	}, 1000);
}
// using let as opposed to var for the i makes i block scoped
