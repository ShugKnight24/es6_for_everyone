'use strict';

const person = {
	first: 'Wes',
	last: 'Bos',
	country: 'Canada',
	city: 'Hamilton',
	twitter: '@wesbos'
};

const { first, last, twitter } = person;

// { } === destructuring syntax
// Essentially, the above says, give a variable called first, last, and twitter from person

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

// rename twitter property to tweet and rename facebook to fb

const { twitter: tweet, facebook: fb } = wes.links.social;

const settings = { width: 300, color: 'black' }  // height, fontSize

const { width = 100, height = 100, color = 'blue', fontSize = 25} = settings;

// pick width and color from setting, but then default them
// If there is no value in the original object, the default will win, otherwise, the value will be replaced
// Height and fontsize keep their defaults
// width will be 300
// color will be 'black'
