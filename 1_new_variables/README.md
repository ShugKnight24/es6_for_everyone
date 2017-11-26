# New Variables — Creation, Updating and Scoping

## Lesson 1 - Var Scoping Refresher

- This was a simple lesson that talked about the differences in scoping and the different keywords that one can use to set a variable.

  - ES6 introduced both `let` and `const`

    - This are both block scoped, as opposed to `var` which is function scoped.

## Lesson 2 - let vs const

- This was also another simple lesson about the differences between let and const.

- It was pretty funny seeing `Object.freeze()` as I met up with a friend on Tuesday 11/21 and we were talking about ES6 and he told me about `Object.freeze()` and the library immutable.js.

## Lesson 3 - let and const in the Real World

- Pretty simple examples, but they both illustrate the useful nature of having `let` and `const` variables scoped to a particular block.

## Lesson 4 - Temporal Dead Zone

- This was another short and simple Lesson

  - I'm actually curious why the creators of ES6 added this feature in. I suppose in the long run, it makes your code more readable as you can only access the contents of `let` and `const` variables after they have been defined leading to much more consistent results.

## Lesson 5 - Is `var` dead? What Should I use?

- This lesson discusses where to use `let`, `const`, and `var`

  - In this [article](https://mathiasbynens.be/notes/es6-const) by Mathias Bynens, he believes that all variables should be `const` by default. You should use `let` when you plan on reassigning a variable. He concludes by saying that `var` should not be used in ES6.

  - Kyle Simpson is of the opinion that

    - `var` should be used for top-level Variables

    - `let` should be used for local variables and smaller scopes

    - `const` should be used when you are fairly sure that there will be no variable reassignment
