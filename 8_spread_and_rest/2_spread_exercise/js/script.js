'use strict';

// Instructions
// Use `map()`, `...spread`, and `querySelectorAll()` to make all the letters in .jump be wrapped in a span

// my solution
const jumpHeading = document.querySelector('.jump');

const jumpStringValue = jumpHeading.textContent;

const stringArray = [...jumpStringValue];

const newHTML = [];

stringArray.map(letter => {
	newHTML.push(`<span>${letter}</span>`);
});

jumpHeading.innerHTML = '';

jumpHeading.innerHTML = newHTML.join('');
