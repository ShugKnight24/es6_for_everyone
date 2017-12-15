'use strict';

const inventors = ['Einstein', 'Newton', 'Galileo'];
const newInventors = ['Musk', 'Jobs'];

// can solve the problem like this as well
// inventors.push.apply(inventors, newInventors);

inventors.push(...newInventors);
console.log(inventors);

const name = ['Wes', 'Bos'];

function sayHi(first, last) {
  alert(`Hey there ${first} ${last}`);
}

// It's pretty cool that you can spread the arguments into a function using a spread operator
sayHi(...name);
