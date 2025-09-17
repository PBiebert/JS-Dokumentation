"use strict";

//! An object consists of key-value pairs

let myFancyObject = {
  // key = "age", value = 32 - called a Property
  age: 32,

  // key = "height", value = 173
  height: 173,

  // key = "name", value = "Philipp"
  name: "Philipp",

  // A function inside an object is called a Method
  logNumber: function () {
    console.log(123);
  },
};

//! Accessing properties

// Option 1: Dot Notation (recommended)
console.log(myFancyObject.age); // Output: 32

// Option 2: Bracket Notation (key must be a string)
// Useful when the key is dynamic, but generally not recommended
console.log(myFancyObject["name"]); // Output: Philipp

// Calling methods
myFancyObject.logNumber(); // Output: 123
