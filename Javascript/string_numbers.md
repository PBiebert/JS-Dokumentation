[Back to Table of Contents](../README.md)

# Numbers and Strings in JavaScript

## Numbers – Basic Arithmetic

```js
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
```

---

## Strings

```js
let myConcat = "Hello " + "World"; // string concatenation
console.log("Concatenation:", myConcat); // Output: Hello World

// Combination of strings and numbers
let myCombination1 = "5" + 5; // results in the string "55"
console.log("String + Number:", myCombination1);

let myCombination2 = 5 + "5"; // also results in "55"
console.log("Number + String:", myCombination2);
```

---

## String Methods

### Length and Whitespace

**.length** returns the length of the string (including spaces).  
**.trim()** removes whitespace from the beginning and end of the string.

```js
let myTestString = " Hello  ";
console.log(myTestString.length); // Output: 8
console.log(myTestString.trim()); // Output: "Hello"
```

### Uppercase and Lowercase

**.toUpperCase()** converts all characters to uppercase.  
**.toLowerCase()** converts all characters to lowercase.

```js
let fruit = "bAnanA";
console.log(fruit.toUpperCase()); // Output: "BANANA"
console.log(fruit.toLowerCase()); // Output: "banana"
```

### Searching in Strings

**.includes()** checks if a substring exists in the string (returns true or false).

```js
console.log(myTestString.includes("Hell")); // Output: true
console.log(myTestString.includes("world")); // Output: false
```

### Replacing Text

**.replace(searchValue, newValue)** replaces the first occurrence of searchValue with newValue (does not change the original, returns a new string).

```js
let greeting = "Hello World";
console.log(greeting.replace("World", "JavaScript")); // Output: "Hello JavaScript"

let sentence = "I love apples";
let newSentence = sentence.replace("apples", "bananas");
console.log(newSentence); // Output: "I love bananas"
```

### Formatting Numbers

**.toFixed(digits)** rounds a number and returns it as a string with a fixed number of decimal places.  
With **.replace()** you can, for example, replace the decimal point with a comma.

```js
let myNumber = 10.2560876;
console.log(myNumber.toFixed(2)); // Output: "10.26"
console.log(myNumber.toFixed(0)); // Output: "10"
console.log(myNumber.toFixed(4)); // Output: "10.2560"

let price = 10.25;
let formattedPrice = price.toString().replace(".", ",");
console.log(formattedPrice); // Output: "10,25"
```

---

## Summary

- With basic arithmetic and string operations, you can solve many tasks in JavaScript.
- String methods like `.trim()`, `.toUpperCase()`, `.includes()`, or `.replace()` are very useful for text processing.
- Numbers can be formatted with `.toFixed()`.
