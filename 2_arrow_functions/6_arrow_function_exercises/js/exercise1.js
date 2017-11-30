'use strict';

// Select all the list items on the page and convert to array

const listItems = document.querySelectorAll('li');

// console.log({listItems});

const listItemsArray = [];

listItems.forEach(listItem => {
	listItemsArray.push(listItem);
})

// console.log({listItemsArray});

// Filter for only the elements that contain the word 'flexbox'

const filteredList = listItemsArray.filter(listItem => listItem.textContent.includes('Flexbox'));

// console.log({filteredList});

// map down to a list of time strings
const mappedList =	filteredList.map(listItem => listItem.dataset.time);

// console.log({mappedList});

// map to an array of seconds

const mappedListInSeconds = mappedList.map(listItem => {
	const timeParts = listItem.split(':').map(numberValue => parseFloat(numberValue));
	return (timeParts[0] * 60) + timeParts[1];
});

// console.log({mappedListInSeconds});

// reduce to get total

const totalTimeInSeconds = mappedListInSeconds.reduce((totalTime, itemTime) => totalTime + itemTime, 0);

console.log({totalTimeInSeconds});

// 🔥 This can also be done in a single .reduce(), but we're practicing arrow functions here, so chain them!
