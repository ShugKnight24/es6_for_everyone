# Promises

- Promises are something I've really been looking forward to learning about. They seem so beneficial when writing your code. I'm really excited to get into this!

## Lesson 1 - Promises

- From everything I've seen and read, promises are really cool.

  - They allow you to fetch data in an easier manner

  - `fetch()` is a cool method from the browser

    - puts a promise into the variable

  - A promise is something that will happen in the future, but will most likely not happen immediately

  - `.then()` is similar to a callback

    - only runs when the promise's data is returned

  - You can `fetch()` any type of data

    - You need to be specific if it is `json`

	- Call `.then()` again and then do whatever you need with your data

  - Good for code readability

  - `then()` only fires when a promise successfully returns data

  - Use `.catch()` to see if it fails

    - Can return the error

## Lesson 2 - Building your own Promises

- Store a new promise in a variable

  - It takes in resolve and reject parameters

    - `resolve` Promise successfully completed

	- `reject` Promise failed / an error occurred

	  - Can wrap the error in an `Error()` object to give you a better stack trace

## Lesson 3 - Chaining Promises + Flow Control

- This was a pretty cool lesson about how two database tables may interact when pulling the data via promises

  - You can chain promises

    - Once one promise completes, fire another promise that is waiting on that specific data to complete your given task.

	  - First thing must occur for the second thing to occur

## Lesson 4 - Working with Multiple Promises

- Cool that you can resolve promises together when they don't particularly depend on each other

  - Use `.all()` to have all promises you are working on resolve at once

## Final Thoughts

- Promises are really fascinating

  - Like everything I've been learning in this ES6 course, I would like to get more practice building and uses promises to get more practice with them

  - I can definitely see how they make your code more readable.
