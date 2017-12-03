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
