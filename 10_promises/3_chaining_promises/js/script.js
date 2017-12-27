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

// posts and authors are supposed to represent two seperate databases you are attempting to interact with

function getPostById(id) {
	// create a new promise
	return new Promise((resolve, reject) => {
	// using a settimeout to mimick a database
		setTimeout(() => {
			// find the post we want
			const post = posts.find(post => post.id === id);

			// check if there was a post with that id
			if (post) {
				resolve(post); // send the post back
			} else {
				// reject if no post with that id
				reject(Error('No Post Was Found!'));
			}
		}, 200);
	});
}

// replace author of the post with the author object
function hydrateAuthor(post) {
	// create a new promise
	return new Promise((resolve, reject) => {
	// find the author
		const authorDetails = authors.find(person => person.name === post.author);

		// if there is an author
		if (authorDetails) {
			// "hydrate" the post object with the author object
			post.author = authorDetails;
			resolve(post);
		} else {
			reject(Error('Cannot find the author'));
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
