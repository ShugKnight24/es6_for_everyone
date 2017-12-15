'use strict';

const people = Array.from(document.querySelectorAll('.people p'));

// alternatively, you can immediately spread into an array
const spreadPeople = [...document.querySelectorAll('.people p')];

const names = people.map((person) => person.textContent );

const deepDish = {
  pizzaName: 'Deep Dish',
  size: 'Medium',
  ingredients: ['Marinara', 'Italian Sausage', 'Dough', 'Cheese']
};

// You can spread all of the items from an object's array
// Again, this is a copy, not as reference
const shoppingList = ['Milk', 'Flour', ...deepDish.ingredients];
console.log({shoppingList});

const comments = [
  { id: 209384, text: 'I love your dog!' },
  { id: 523423, text: 'Cuuute! 🐐' },
  { id: 632429, text: 'You are so dumb' },
  { id: 192834, text: 'Nice work on this wes!' },
];
const id = 632429;
const commentIndex = comments.findIndex(comment => comment.id === id);

// using spread takes the comments out of the array and places them within the new array
// without using spread, you would get 2 arrays of objects
const newComments = [...comments.slice(0,commentIndex), ...comments.slice(commentIndex + 1)];
console.log(newComments);
