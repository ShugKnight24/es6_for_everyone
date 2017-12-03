'use strict';

const beer = {
	name: 'Belgian Wit',
	brewery: 'Steam Whistle Brewery',
	keywords: ['pale', 'cloudy', 'spiced', 'crisp']
};

function renderKeywords(keywords) {
	return `
		<ul>
			${keywords.map(keyword => `<li>${keyword}</li>`).join('')}
		</ul>
	`;
}

const markup = `
	<div class="beer">
		<h2>${beer.name}</h2>
		<p class="brewery">${beer.brewery}</p>
		${renderKeywords(beer.keywords)}
	</div>
`;

document.body.innerHTML = markup;

// It is really cool that you can run functions within template tags

// I suppose I should have realized considering the fact that Wes used `map()` within an earlier example

// This would really help make my code much more readable

// I also like Wes' general programmatic approach and I believe that going through his content had helped to improve my own approach to solving programming problems.
