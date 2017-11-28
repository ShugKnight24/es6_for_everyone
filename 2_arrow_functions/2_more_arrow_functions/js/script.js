'use strict';

const race = '100m Dash';
const winners = ['Hunter Gath', 'Singa Song', 'Imda Bos'];

const win = winners.map((winner, i) => ({name: winner, race, place: i + 1}));

// cool feature in ES6 that you can remove the key / value pair, and the name of the variable will be set to the key

console.log({win});

const ages = [23,62,45,234,2,62,234,62,34];

const old = ages.filter(age => age >= 60);

// you can pass the condition in and filter will only give you the values that pass the condition

console.log(old);
