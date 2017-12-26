'use strict';

const p = new Promise((resolve, reject) => {
	setTimeout(() => {
		reject(Error('Err wes isn\'t cool'));
	}, 1000);
});

p
	.then(data => {
		console.log(data);
	})
	.catch(err => {
		console.error(err);
	});
