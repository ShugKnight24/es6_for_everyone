'use strict';

function sanitize(strings, ...values) {

	const dirty = strings.reduce((prev, next, i) => `${prev}${next}${values[i] || ''}`, '');

	return DOMPurify.sanitize(dirty);

}

// This really cool. I want to learn more about these techniques to prevent the projects I work on from being vunerables to malicious attacks

// It is easy to be naive and think all your users have the best intentions, but I know that XSS and sql Injection are very really threats.

// I want to learn as much about the best practices for dealing with malicious attacks and user inputs

const first = 'Wes';
const aboutMe = `I love to do evil <img src="http://unsplash.it/100/100?random" onload="alert('you got hacked');" />`;

const html = sanitize`
	<h3>${first}</h3>
	<p>${aboutMe}</p>
`;

const bio = document.querySelector('.bio');
bio.innerHTML = html;
