'use strict';

const dict = {
	HTML: 'Hyper Text Markup Language',
	CSS: 'Cascading Style Sheets',
	JS: 'JavaScript'
};

function addAbbreviations(strings, ...values){

	const abbreviated = values.map(value => {

		if (dict[value]){
			return `<abbr title="${dict[value]}">${value}</abbr>`
		}

		// add abbr tag to values found in dict

		return value;

	});

	return strings.reduce((sentence, string, i) => {

		return `${sentence}${string}${abbreviated[i] || ''}`

	});

}

const first = 'Shugmi';
const last = 'Shumunov';
const sentence = addAbbreviations`Hello my name is ${first} ${last} and I love to code ${'HTML'}, ${'CSS'}, and ${'JS'}.`;
const bio = document.querySelector('.bio');
const p = document.createElement('p');

p.innerHTML = sentence;
bio.appendChild(p);
