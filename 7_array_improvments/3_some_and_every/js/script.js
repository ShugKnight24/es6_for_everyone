'use strict';

const ages = [32, 15, 19, 12];

// 👵👨 is there at least one adult in the group?
// `some()` checks to see if one item in the array meets the condition
const adultPresent = ages.some(age => age >= 18);
console.log({adultPresent}); // true

// 🍻 is everyone old enough to drink?
// `every()` checks to see if all of the items in the array meet the condition
const allOldEnough = ages.every(age => age >= 19);
console.log({allOldEnough}); // false
