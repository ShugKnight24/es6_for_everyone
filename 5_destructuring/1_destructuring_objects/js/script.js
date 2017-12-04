'use strict';

const person = {
	first: 'Wes',
	last: 'Bos',
	country: 'Canada',
	city: 'Hamilton',
	twitter: '@wesbos'
};

const { first, last, twitter } = person; 

const wes = {
	first: 'Wes',
	last: 'Bos',
	links: {
		social: {
			twitter: 'https://twitter.com/wesbos',
			facebook: 'https://facebook.com/wesbos.developer',
		},
		web: {
			blog: 'https://wesbos.com'
		}
	}
};

const { twitter: tweet, facebook: fb } = wes.links.social;

const settings = { width: 300, color: 'black' }  // height, fontSize
const { width = 100, height = 100, color = 'blue', fontSize = 25} = settings;
