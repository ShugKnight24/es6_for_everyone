'use strict';

function setWidth() {
	var width = 100;
	console.log(width);
	// var width = 200;
	// console.log(width);
}
setWidth();

// console.log(width); // width isn't defined because width is currently scope to setWidth()

var age = 100;
if(age > 12) {
	// var dogYears = age * 7; // var variables are function scoped and there is no function here, dogYears would become a global variable
	// let dogYears = age * 7;
	const dogYears = age * 7;
	console.log(`You are ${dogYears} dog years old!`);
}

let height = 200; // in the above example, using let or const would have scoped dogYears into that specific block
const key = 'abc123';
