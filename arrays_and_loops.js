"use strict";

// create a Array with square brackets
// Array ids starts at the number zero not with one
let myList = [12, "bannana", 1];

// write a square bracket after the array name in the entry at the position to be called
console.log(myList[1]);

//overwrites the value on the position on in the Array
myList[1] = "no Bannana";

//! Add and remove something from the array

let fruits = ["Bannana", "Orange", "Apple", "Manog"];

// "Array.push()" - The push() method adds a new element to an array (at the end).
fruits.push("Kiwi"); //Output:

// "Array.pop()" - The pop() method removes the last element from an array.
fruits.pop(); //Output:

function initArrays() {
  console.log(fruits);
}
for
