"use strict";

//! Functions in JavaScript
// A function is a block of code that you can use again and again.
// You can give inputs to the function, called parameters.
// A function can give back a result using "return".

let tax = 1.19; // tax multiplier

// Call the function and save the result
let result = calculatePrice(50, 400, tax);

console.log(result); // output: 416.5

// Function definition
function calculatePrice(discount, price, tax) {
  // discount, price, tax are inputs for the function
  // return sends the result back to the place where we called the function
  return (price - discount) * tax;
}

//! Arrow-function
// Arrow functions are a shorter way to write functions
// They use the "=>" syntax instead of the "function" keyword
// Arrow functions are especially useful for short, simple functions
// Syntax: (parameters) => { code block } or (parameters) => expression

// Traditional function
function addTraditional(a, b) {
  return a + b;
}

// Arrow function (long form)
let addArrow = (a, b) => {
  return a + b;
};

// Arrow function (short form) - automatically returns the expression
let addShort = (a, b) => a + b;

// Arrow function with single parameter (parentheses optional)
let double = (x) => x * 2;

// Arrow function with no parameters
let getRandomNumber = () => Math.random();

// Test the arrow functions
console.log(addArrow(5, 3)); // output: 8
console.log(addShort(10, 20)); // output: 30
console.log(double(7)); // output: 14
console.log(getRandomNumber()); // output: zufällige Zahl zwischen 0 und 1
