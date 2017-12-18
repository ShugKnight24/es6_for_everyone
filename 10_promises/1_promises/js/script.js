'use strict';

// Fetch is built into the browser
const postsPromise = fetch('http://wesbos.com/wp-json/wp/v2/posts');

// Promises are something that are going to occur in the future
// Likely not immediately though
// Js is pretty asynchronous

postsPromise
// Chaining `.then()`
	// If it succeeds
	.then(data => data.json())
	.then(data => { console.log(data) })

	// catch any errors
	.catch((err) => {
		console.error(err);
	})
