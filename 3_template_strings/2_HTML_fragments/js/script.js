'use strict';

const person = {
	name: 'Wes',
	job: 'Web Developer',
	city: 'Hamilton',
	bio: 'Wes is a really cool guy that loves to teach web development!',
};

const markup = `
	<div class="person">
		<h2>
			${person.name}
			<span class="job">${person.job}</span>
		</h2>
		<p class="location">${person.city}</p>
		<p class="bio">${person.bio}</p>
	</div>
`;

console.log({markup});
document.body.innerHTML = markup;

// using template literals makes it a lot cleaner when creating HTML in your JavaScript.

// I am definitely looking forward to refactoring some of my previous code with template strings. It will make the sections I dynamically created HTML so much nicer and easier to read.
