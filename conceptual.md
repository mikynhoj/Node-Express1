### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
There are three methods that JavaScript uses for handling asynchronous code - callbacks, promises, and async/await keywords.

- What is a Promise?
A promise is a one-time guarentee of future value.

- What are the differences between an async function and a regular function?
Async functions has promises and await keywords available for use and functionality while a normal function does not.

- What is the difference between Node.js and Express.js?
Express.js is a framework based on Node.js for which is used for building web-application using approaches and principles of Node.js.

- What is the error-first callback pattern?
The error-first pattern consists of executing a function when the asynchronous operation ends (such as an incoming AJAX response) which takes as first argument an error, if one occurred, and the result of the request as extra arguments.

- What is middleware?
In Express, middleware are functions that get access to the req and res objects and can also call the next function.

- What does the `next` function do?
'next' passes the function to the next route - if it is not used, express gives back an error message.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)
'let' should be used instead of const. Refactoring should be used as well for the url strings and a set of users in one refactoring should be used instead of three. 

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
