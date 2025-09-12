"use strict";

//! Functions in JavaScript
// 1. A function is a block of code that you can use again and again.
// 2. You can give inputs to the function, called parameters.
// 3. A function can give back a result using "return".

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
