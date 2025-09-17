"use strict";

//! Numbers - Basic Arithmetic
let myDivision = 10 / 5; // division
console.log("Division:", myDivision); // Output: 2

let myMultiplication = 10 * 5; // multiplication
console.log("Multiplication:", myMultiplication); // Output: 50

let myPower = 2 ** 3; // exponentiation
console.log("Power:", myPower); // Output: 8

let mySubtraction = 10 - 5; // subtraction
console.log("Subtraction:", mySubtraction); // Output: 5

let myAddition = 10 + 5; // addition
console.log("Addition:", myAddition); // Output: 15

// ===================================================================================================

//! Strings
let myConcat = "Hallo " + "Welt"; // string concatenation
console.log("Concatenation:", myConcat); // Output: Hallo Welt

// Combination of strings and numbers
let myCombination1 = "5" + 5; // becomes a string "55"
console.log("String + Number:", myCombination1);

let myCombination2 = 5 + "5"; // also becomes "55"
console.log("Number + String:", myCombination2);

// ===================================================================================================

//! String methods
// Example string
let myTestString = " Hallo  ";

// ".length" returns the length of the string, Includes all characters, including spaces
console.log(myTestString.length); // Output: 8

// ".trim()" removes whitespace from both ends of the string, Leading and trailing spaces are removed
console.log(myTestString.trim()); // Output: "Hallo"

// ".toUpperCase()" converts all characters in the string to uppercase
let fruit = "bAnanE";
console.log(fruit.toUpperCase()); // Output: "BANANE"

// ".toLowerCase()" converts all characters in the string to lowercase
console.log(fruit.toLowerCase()); // Output: "banane"

// ".includes()" checks if a substring exists in the string, returns true or false
console.log(myTestString.includes("Hall")); // Output: true
console.log(myTestString.includes("welt")); // Output: false

// ".replace()" replaces part of the string with another string
let greeting = "Hallo Welt";
console.log(greeting.replace("Welt", "JavaScript")); // Output: "Hallo JavaScript"

// ".toFixed(digits)" converts a number to a string with a fixed number of decimal places
// It rounds the number if necessary and returns a string
let myNumber = 10.2560876;
console.log(myNumber.toFixed(2)); // Output: "10.26"
console.log(myNumber.toFixed(0)); // Output: "10"
console.log(myNumber.toFixed(4)); // Output: "10.2560"

// ".replace(searchValue, newValue)" replaces the first occurrence of search Value in a string with new Value
// It does not change the original string and returns a new string
// For numbers, convert the number to a string first using .toString() or .toFixed()
// Example string
let sentence = "Ich liebe Äpfel";
let newSentence = sentence.replace("Äpfel", "Bananen");
console.log(newSentence); // Output: "Ich liebe Bananen"

// Example with a number
let price = 10.25;
let formattedPrice = price.toString().replace(".", ",");
console.log(formattedPrice); // Output: "10,25"
