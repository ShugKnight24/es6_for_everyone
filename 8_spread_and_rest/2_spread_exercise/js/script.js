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

// Wes' solution
// It is really fascinating seeing how much cleaner his code is than my own
// As much as I've been improving lately, I still have so much more room to grow as a developer
// This is the type of code I eventually want to be able to write
// Really concise, clean JavaScript...
// Here is to more practice and more learning

const heading = document.querySelector('.jump');
heading.innerHTML = sparanWrap(heading.textContent);

function sparanWrap(word) {
	return [...word].map(letter => `<span>${letter}</span>`).join('');
}
