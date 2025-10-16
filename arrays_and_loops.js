"use strict";

//! Arrays - Basics

// Create an array using square brackets
// Array indices start at 0, not 1
let myList = [12, "bannana", 1];
let fruits = ["Banana", "Orange", "Apple", "Mango"];

// Access an element by writing its index in square brackets
console.log(myList[1]);

// Overwrite the value at a specific index in the array
myList[1] = "no Banana";

//! Arrays - Add & Remove Elements

// "Array.push()" - adds one or more elements at the end of the array and returns the new length
fruits.push("Kiwi");

// "Array.pop()" - removes the last element from the array and returns it
fruits.pop();

console.log(fruits);

// "Array.shift()" - removes the first element of the array and returns it
function removeFirstElement(array) {
  array.shift();
  return array;
}

console.log(removeFirstElement([10, 20, 30, 40])); // output: [20, 30, 40]
console.log(removeFirstElement(["a", "b", "c", "d"])); // output: ['b', 'c', 'd']

// "Array.unshift()" - adds one or more elements at the start and returns the new length
function addElementToStart(array, element) {
  array.unshift(element);
  return array;
}

console.log(addElementToStart([2, 3, 4], 1)); // output: [1, 2, 3, 4]
console.log(addElementToStart(["b", "c", "d"], "a")); // output: ['a', 'b', 'c', 'd']

// "Array.splice()" - changes the array by removing, replacing, or adding elements
function modifyArray(array, start, deleteCount, ...items) {
  array.splice(start, deleteCount, ...items);
  return array;
}

console.log(modifyArray(["Banana", "Orange", "Apple", "Mango"], 2, 1));
// output: ['Banana', 'Orange', 'Mango']

console.log(modifyArray(["Banana", "Orange", "Mango"], 1, 0, "Kiwi"));
// output: ['Banana', 'Kiwi', 'Orange', 'Mango']

console.log(modifyArray(["Banana", "Kiwi", "Orange", "Mango"], 2, 1, "Lemon"));
// output: ['Banana', 'Kiwi', 'Lemon', 'Mango']

//! Arrays - Search & Check

// "Array.includes()" - returns true if the array contains the given element, otherwise false
function isIncluded(array, element) {
  return array.includes(element);
}

console.log(isIncluded(["Anna", "Ben", "Clara"], "Ben")); // output: true
console.log(isIncluded(["Anna", "Ben", "Clara"], "Daniel")); // output: false

// "Array.indexOf()" - returns the first index of the element, or -1 if not found
function findElementIndex(array, element) {
  return array.indexOf(element);
}

console.log(findElementIndex([10, 20, 30, 40], 30)); // output: 2
console.log(findElementIndex([10, 20, 30, 40], 50)); // output: -1

// "Array.filter()" - filters an array of objects based on a condition
// Acts like a search function that returns all elements where the condition is true
// The callback function must return either true or false for each element
let myObjectArray = [
  {
    name: "Max",
    is_a_good_guy: true,
  },
  {
    name: "Peter",
    is_a_good_guy: false,
  },
  {
    name: "Arnold",
    is_a_good_guy: true,
  },
];

console.log(
  myObjectArray.filter((element) => {
    return element["is_a_good_guy"] === true;
  })
);

/*Output:
arrays_and_loops.js:96 
(2) [{…}, {…}]
0:{name: 'Max', is_a_good_guy: true}
1:{name: 'Arnold', is_a_good_guy: true}
length:2
*/

//! Arrays - Copy & Transform

// "Array.slice()" - creates a shallow copy of the array from start index up to (but not including) end index
function getSubArray(array, start, end) {
  return array.slice(start, end);
}

console.log(getSubArray([1, 2, 3, 4, 5], 1, 4)); // output: [2, 3, 4]
console.log(getSubArray(["a", "b", "c", "d", "e"], 0, 3)); // output: ['a', 'b', 'c']

// "Array.join()" - returns a string with all elements joined by the given separator
function joinArray(array, separator) {
  return array.join(separator);
}

console.log(joinArray(["apple", "banana", "cherry"], ", ")); // output: "apple, banana, cherry"
console.log(joinArray([1, 2, 3, 4], " - ")); // output: "1 - 2 - 3 - 4"

//! Loops - Basics

// "for" loop - repeats until a condition evaluates to false
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// "while" loop - executes as long as the condition is true
function whileLoop() {
  let i = 0;
  while (i < 5) {
    i++;
    console.log("while " + i);
  }
}
whileLoop();

// "Array.forEach()" - executes a function once for each array element
function forEachLoop() {
  fruits.forEach((element) => {
    console.log(element);
  });
}
forEachLoop();

//! Arrays - Spread Operator

// The spread operator "..." expands an array into individual elements
// Can be used for copying, merging, or inserting elements into another array
let colors = ["Red", "Green", "Blue"];
let colorsCopy = [...colors]; // creates a shallow copy of the array
console.log("Colors Copy:", colorsCopy); // Output: ["Red", "Green", "Blue"]

//! Loops - Examples with for

// Calculate the sum of all elements in an array
function sumArray(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return `${array.join(" + ")} = ${sum}`;
}
console.log(sumArray([3, 7, 1, 4])); // output: 3 + 7 + 1 + 4 = 15
console.log(sumArray([1, 2, 3, 4, 5])); // output: 1 + 2 + 3 + 4 + 5 = 15

// Generate a sequence of numbers
function printNumbers(num) {
  let numb = 0;
  let numbArray = [];

  for (let i = 0; i < num; i++) {
    numb += 1;
    numbArray.push(numb);
  }
  return numbArray.join(", ");
}
console.log(printNumbers(5)); // output: 1, 2, 3, 4, 5
console.log(printNumbers(3)); // output: 1, 2, 3

// Generate a sequence of numbers in reverse order
function printNumbersReverse(num) {
  let numb = num + 1;
  let numbArray = [];

  for (let i = 0; i < num; i++) {
    numb -= 1;
    numbArray.push(numb);
  }
  return numbArray.join(", ");
}
console.log(printNumbersReverse(5)); // output: 5, 4, 3, 2, 1
console.log(printNumbersReverse(3)); // output: 3, 2, 1

// Return every third element of an array
function printEveryThirdElement(array) {
  let counter = 3;
  let thirdElementArray = [];

  for (let i = 0; i < array.length; i++) {
    if (counter >= 3) {
      thirdElementArray.push(array[i]);
      counter = 1;
    } else {
      counter++;
    }
  }
  return thirdElementArray.join(", ");
}
console.log(printEveryThirdElement([1, 2, 3, 4, 5, 6, 7, 8, 9])); // output: 3, 6, 9
console.log(printEveryThirdElement(["a", "b", "c", "d", "e", "f"])); // output: c, f

// Check if a number is prime
function isPrime(num) {
  if (num < 2) return `${num} is not a prime number`;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return `${num} is not a prime number`;
    }
  }
  return `${num} is a prime number`;
}
console.log(isPrime(7)); // output: 7 is a prime number
console.log(isPrime(4)); // output: 4 is not a prime number

//! Loops - Control Statements

// "break" - immediately exits the current loop
function sumArrayBreak(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];

    if (array[i] == "error") {
      console.error(`error`);
      break;
    }
  }
  return sum;
}
console.log(sumArrayBreak([3, 7, "error", 4])); // output: 10

// "continue" - skips the current iteration and continues with the next one
function sumArrayContinue(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] == "error") {
      continue;
    }
    sum += array[i];
  }
  return sum;
}
console.log(sumArrayContinue([3, 7, "error", 4])); // output: 14
