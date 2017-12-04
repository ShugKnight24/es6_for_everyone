'use strict';

const details = ['Wes Bos', 123, 'wesbos.com'];

// You use [] to destructure an array

const [name, id, website] = details;

console.log({name}, {id}, {website});


// const data = 'Basketball,Sports,90210,23'
// data.split(',')

// const data = 'Basketball,Sports,90210,23';
// const [itemName, category, sku, inventory] = data.split(',');

const data = 'Basketball,Sports,90210,23,wes,bos,cool';
const [itemName, category, sku, inventory] = data.split(',');

// will even get rid of the data that doesn't have variable, which is pretty nifty
console.log({itemName}, {category}, {sku}, {inventory});

const team = ['Wes', 'Harry', 'Sarah', 'Keegan', 'Riker'];

const [captain, assistant, ...players] = team;

console.log({captain}, {assistant}, {players})

// Get the rest of the team using the (...) rest operator
// ... will give you an array of the remaining items in the array
