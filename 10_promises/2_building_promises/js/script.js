'use strict';

const p = new Promise((resolve, reject) => {
	// can either resolve or reject
	// resolve('Wes is cool');
	setTimeout(() => {
		// will reject after 1 sec
		reject(Error('Err wes isn\'t cool'));
	}, 1000);
});

p
	.then(data => {
		console.log(data);
	})
	// Need to catch the error
	.catch(err => {
		console.error(err);
	});
