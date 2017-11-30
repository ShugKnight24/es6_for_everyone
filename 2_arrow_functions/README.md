# Arrow Functions

## Lesson 1 - Arrow Functions Introduction

- This was a fairly simple and straightforward lesson, but I really enjoyed how Wes progressed through and explained how to condense a function into an arrow function.

  - Using template literals

  - Not having to surround the parameter in parentheses unless there is more than one

  - implicitly returning with arrow Functions

  - by default, arrow functions are anonymous, but you can store them in variables to solve this problem.

## Lesson 2 - More Arrow Function examples

- More practical arrow functions examples

- If you have a key / value pair, you can pass the variable as the value and the object will have a property with that variables name

- Passing a condition directly into filter

  - It only returns those that are true.

## Lesson 3 - Arrow Functions and `this`

- Arrow functions do not bind the `this` keyword

  - It is important to realize this because this will tell you when you can and can't use an arrow function.

- Use a regular function declaration to bind `this` to something.

  - Can use an arrow function internally to inherit the value of `this`

  - Using a regular function declaration will rebind this

- You can use destructuring to assign multiple variables

## Lesson 4 - Default Function Arguments

- This was a simple lesson, but I really enjoyed it

  - Setting default values for parameters / arguments can be extremely useful.

    - You can override the default by passing in a different value in the function call itself

    - It was also cool seeing that you could pass in undefined, and the default value would be used.

## Lesson 5 - When NOT to use an Arrow Functions

- In this lesson Wes discussed the scenarios where you would typically not use an arrow function.

  - As we saw in lesson 3, you can't use an arrow function when you need `this` to be bound to something. Arrow functions do not reset the binding of `this`, and if will typically set `this` = to the window or inherit the value of `this` from its parent.

    - Need to be cautious when you require `this`

  - If you need access to the arguments object, you cannot use an arrow function.

    - Arrow functions don't have access to the arguments object.

## Lesson 6 - Arrow Function Exercises

- I really enjoyed the exercises. They gave me a great opportunity to get more practice both arrow functions and higher order functions simultaneously.

  - I found exercise 1 pretty challenging.

    - Especially the part of breaking apart the number and figuring out a way to get the time value.

      - The solution had you chaining all of the different functions on one variable, which I could see would help readability (something I definitely want to get better at), but for me, I think it is more practical to store all of the altered array states in different variables in case you need to access them in the future.

        - This would obviously depend on the project you are working on, and you may have the knowledge that the arrays you are constructing will provide you with no future benefit.

  - Disappointingly, Exercise 2 was extremely easy.

    - I was hoping to get another extremely challenging problem to test my skills, but it was pretty straightforward.
