'use strict';

// An example of how the `this` keyword does not get rebound in arrow functions

const box = document.querySelector('.box');
box.addEventListener('click', function() {

	// why we use a regular function as opposed to an arrow function in this instance
	// want the `this` keyword to refer to the '.box'

	let first = 'opening';
	let second = 'open';

	if (this.classList.contains(first)) {
		[first, second] = [second, first];
	}

	this.classList.toggle(first);
	setTimeout(() => {
		// Can't use a regular function here because it is not bound to anything
		// `this` would refer to the `window`

		// with an arrow function, the value of this doesn't change. It inherits the value from the parent

		console.log(this);
		this.classList.toggle(second);
	}, 500);
});
