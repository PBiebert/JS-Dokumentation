[Back to Table of Contents](../README.md)

# Functions in JavaScript

## What is a Function?

A function is a block of code that you can reuse. You can pass inputs (parameters) to the function. With "return" the function can return a result.

---

## Example: Function with Parameters and Return Value

```js
let tax = 1.19; // VAT factor

// Call the function and store the result
let result = calculatePrice(50, 400, tax);

console.log(result); // Output: 416.5

// Function definition
function calculatePrice(discount, price, tax) {
  // discount, price, tax are inputs (parameters)
  // return gives back the result
  return (price - discount) * tax;
}
```

---

## Arrow Functions

Arrow functions are a shorter way to write functions. They use the `=>` syntax instead of the `function` keyword. Especially useful for short, simple functions.

**Syntax:** `(parameter) => { code block }` or `(parameter) => expression`

```js
// Traditional function
function addTraditional(a, b) {
  return a + b;
}

// Arrow function (long form)
let addArrow = (a, b) => {
  return a + b;
};

// Arrow function (short form) – automatically returns the expression
let addShort = (a, b) => a + b;

// Arrow function with only one parameter (parentheses optional)
let double = (x) => x * 2;

// Arrow function with no parameters
let getRandomNumber = () => Math.random();

// Test the arrow functions
console.log(addArrow(5, 3)); // Output: 8
console.log(addShort(10, 20)); // Output: 30
console.log(double(7)); // Output: 14
console.log(getRandomNumber()); // Output: random number between 0 and 1
```

---

## Summary

- Functions help you reuse and structure code.
- Parameters make functions flexible.
- Arrow functions are a modern, compact alternative to classic function syntax.
- Use `return` to output values from a function.
