'use strict';

const posts = [
	{ title: 'I love JavaScript', author: 'Wes Bos', id: 1 },
	{ title: 'CSS!', author: 'Chris Coyier', id: 2 },
	{ title: 'Dev tools tricks', author: 'Addy Osmani', id: 3 },
];

const authors = [
	{ name: 'Wes Bos', twitter: '@wesbos', bio: 'Canadian Developer' },
	{ name: 'Chris Coyier', twitter: '@chriscoyier', bio: 'CSS Tricks and CodePen' },
	{ name: 'Addy Osmani', twitter: '@addyosmani', bio: 'Googler' },
];

function getPostById(id) {
	// create a new promise
	return new Promise((resolve, reject) => {
	// using a settimeout to mimick a database
		setTimeout(() => {
			// find the post we want
			const post = posts.find(post => post.id === id);
			if(post) {
			resolve(post); // send the post back
			} else {
			reject(Error('No Post Was Found!'));
			}
		}, 200);
	});
}

function hydrateAuthor(post) {
	// create a new promise
	return new Promise((resolve, reject) => {
	// find the author
		const authorDetails = authors.find(person => person.name === post.author);

		if(authorDetails) {
			// "hydrate" the post object with the author object
			post.author = authorDetails;
			resolve(post);
		} else {
			reject(Error('Can not find the author'));
		}
	});
}

getPostById(3)
	.then(post => {
		return hydrateAuthor(post);
	})
	.then(post => {
		console.log(post);
	})
	.catch(err => {
		console.error(err);
	});
