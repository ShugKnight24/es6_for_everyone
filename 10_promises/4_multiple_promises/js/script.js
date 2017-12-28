'use strict';

const weather = new Promise((resolve) => {
	setTimeout(() => {
		resolve({ temp: 29, conditions: 'Sunny with Clouds'});
	}, 2000);
});

const tweets = new Promise((resolve) => {
	setTimeout(() => {
		resolve(['I like cake', 'BBQ is good too!']);
	}, 500);
});

Promise
	// Use `.all()` to get a response from all promises that you want
	// Typically used when these promises have no effect on one another
	// pass in an array of promises that you want returned
	.all([weather, tweets])
	.then(responses => {
		// both promises are returned together
		console.log(responses);

		// destructure the responses into two seperate variables
		const [weatherInfo, tweetInfo] = responses;
		console.log(weatherInfo, tweetInfo);
	});

// will take 2 seconds to resolve
	// `.all()` waits for the every promise to resolve before returning anything
	// essentially waits for the slowest promise
// resolves you

// Using real APIs
const postsPromise = fetch('http://wesbos.com/wp-json/wp/v2/posts');
const streetCarsPromise = fetch('http://data.ratp.fr/api/datasets/1.0/search/?q=paris');

Promise
	.all([postsPromise, streetCarsPromise])
	.then(responses => {
		// have to return the data with `.json()`
		// can use map with both items in the array and returns a new array with json data
		return Promise.all(responses.map(res => res.json()))
	})
		// Once that data has been converted to json you can do whatever you need
	.then(responses => {
		console.log(responses);
	});
