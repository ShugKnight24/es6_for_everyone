'use strict';

// the spread operator (...) takes all the items from an iterable and apply them to the containing array
const featured = ['Deep Dish', 'Pepperoni', 'Hawaiian'];
const specialty = ['Meatzza', 'Spicy Mama', 'Margherita'];

// as opposed to doing something like this...

// let pizzas = pizzas.concat(featured);
// pizzas.push('veg');
// pizzas = pizzas.concat(specialty);

// You can do this
const pizzas = [...featured, 'veg', ...specialty];
console.log({pizzas});

// Can use ...spread to copy an entire array into a new array
const fridayPizzas = [...pizzas];
console.log({fridayPizzas});

const deepDish = {
	pizzaName: 'Deep Dish',
	size: 'Medium',
	ingredients: ['Marinara', 'Italian Sausage', 'Dough', 'Cheese']
};
