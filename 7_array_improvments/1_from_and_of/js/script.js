// `.from()` and `.of()` are not on the prototype
// there are both methods on Array

// `.from()` converts things similar to arrays to an actual array
// people is a NodeList
// You can use `Array.from()` to make the NodeList into an actual array

// Also could have wrapped the querySelectorAll in `Array.from()`
const people = document.querySelectorAll('.people p');

// `Array.from()` can take a second argument which is a map function
const peopleArray = Array.from(people, person => {
	console.log(person);
	return person.textContent;
});
console.log(peopleArray);

// const names = people.map(person => person.textContent);

// Arguments are not actually an array
// Need to be converted to an array first
function sumAll() {
	const nums = Array.from(arguments);
	return nums.reduce((prev, next) => prev + next, 0);
}

sumAll(2, 34, 23, 234, 234, 234234, 234234, 2342);

// `Array.of()` creates an array of all of the values passed inside of it
const ages = Array.of(12,4,23,62,34);
console.log(ages);
