# JavaScript Basics

## Difference between let and const

With `let` you declare a variable that can be changed. With `const` you declare a constant that cannot be changed.

```js
let age = 27;
console.log("Age: ", age); // Output: 27

age = 32;
console.log("New age: ", age); // Output: 32

const birthYear = 1996;
console.log("Birth year: ", birthYear); // Output: 1996
```

---

## Data Types

JavaScript has several data types:

### String

**String** stands for text.

```js
let myString = "This is a text";
```

### Number

**Number** stands for numbers (integer or floating point).

```js
let myInt = 32; // Integer
let myFloat = 32.5466; // Floating point
```

### Boolean

**Boolean** stands for true or false.

```js
let myBoolean = true;
```

### Array

**Array** is a list of values.

```js
let myArray = [2, 5, "Hello"];
```

### Object

**Object** is a collection of key-value pairs.

```js
let myObject = { age: 32, height: 177 };
```

---

## Summary

- With `let` you can change variables, with `const` you cannot.
- The most important data types are: String, Number, Boolean, Array, and Object.
- Arrays store lists, objects store structured data.
