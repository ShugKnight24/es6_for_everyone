'use strict';

const dogs = [
	{ name: 'Snickers', age: 2 },
	{ name: 'Hugo', age: 8 },
	{ name: 'Sunny', age: 1 }
];

const markup = `
	<ul class="dogs">
		${dogs.map(dog => `
			<li>
				${dog.name}
				is
				${dog.age * 7}
			</li>`).join('')}
	</ul>
`;

document.body.innerHTML = markup;

// This is awesome! I didn't know that this could be done, but it will make generating dynamic content that much easier!
