[Back to Table of Contents](../README.md)

# Arrays and Loops in JavaScript

## Arrays – Basics

Arrays are lists of values. Indexing starts at 0.

```js
let myList = [12, "banana", 1];
let fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(myList[1]); // Access an element
myList[1] = "no Banana"; // Overwrite value
```

---

### .push()

**.push()** adds one or more elements to the end of the array and returns the new length.

```js
fruits.push("Kiwi");
```

### .pop()

**.pop()** removes the last element from the array and returns it.

```js
fruits.pop();
```

### .shift()

**.shift()** removes the first element from the array and returns it.

```js
function removeFirstElement(array) {
  array.shift();
  return array;
}
```

### .unshift()

**.unshift()** adds one or more elements to the beginning of the array and returns the new length.

```js
function addElementToStart(array, element) {
  array.unshift(element);
  return array;
}
```

### .splice()

**.splice()** changes the array by removing, replacing, or adding elements.

```js
function modifyArray(array, start, deleteCount, ...items) {
  array.splice(start, deleteCount, ...items);
  return array;
}
```

---

## Searching and Checking

### .includes()

**.includes()** checks if a value is in the array (returns true or false).

```js
let arr = ["Anna", "Ben", "Clara"];
arr.includes("Ben"); // true
```

### .indexOf()

**.indexOf()** returns the index of a value (or -1 if not found).

```js
arr.indexOf("Clara"); // 2
```

### .find()

**.find()** returns the first element that matches a condition (otherwise undefined).

```js
let people = [
  { name: "Anna", age: 25 },
  { name: "Ben", age: 30 },
  { name: "Clara", age: 28 },
];
let foundPerson = people.find((person) => person.age > 26);
```

### .filter()

**.filter()** returns all elements that match a condition.

```js
let onlyGoodGuys = people.filter((person) => person.age > 26);
```

### .findIndex()

**.findIndex()** returns the index of the first matching element (or -1).

```js
let index = people.findIndex((person) => person.name === "Ben");
```

---

## Copying and Transforming Arrays

### .slice()

**.slice()** creates a copy of a section of an array (from start to end index, end index exclusive).

```js
let arr = [1, 2, 3, 4, 5];
let subArr = arr.slice(1, 4); // [2, 3, 4]
```

### .join()

**.join()** joins all elements into a string, separated by the given character.

```js
let joined = arr.join(" - "); // "1 - 2 - 3 - 4 - 5"
```

### Spread Operator (...)

**...** copies or expands arrays.

```js
let copy = [...arr];
```

---

## Loops – Basics

### for loop

**for loop**: Repeats code as long as a condition is true.

```js
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

### while loop

**while loop**: Executes code as long as a condition is true.

```js
function whileLoop() {
  let i = 0;
  while (i < 5) {
    i++;
    console.log("while " + i);
  }
}
whileLoop();
```

### forEach()

**forEach()**: Executes a function for each element in the array.

```js
fruits.forEach((element) => {
  console.log(element);
});
```

---

## Loops – Examples

### Sum of all elements

```js
function sumArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return `${array.join(" + ")} = ${sum}`;
}
```

### Generate a sequence of numbers

```js
function printNumbers(num) {
  let numb = 0;
  let numbArray = [];
  for (let i = 0; i < num; i++) {
    numb += 1;
    numbArray.push(numb);
  }
  return numbArray.join(", ");
}
```

### Generate a sequence in reverse

```js
function printNumbersReverse(num) {
  let numb = num + 1;
  let numbArray = [];
  for (let i = 0; i < num; i++) {
    numb -= 1;
    numbArray.push(numb);
  }
  return numbArray.join(", ");
}
```

### Print every third element

```js
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
```

### Prime number check

```js
function isPrime(num) {
  if (num < 2) return `${num} is not a prime number`;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return `${num} is not a prime number`;
    }
  }
  return `${num} is a prime number`;
}
```

---

## Loop Control Statements

**break** immediately ends the current loop.  
**continue** skips the current iteration and continues with the next one.

```js
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
```

---

## Summary

- Arrays store lists of values.
- With methods like push, pop, shift, unshift, splice, slice, join, includes, etc. you can flexibly manipulate arrays.
- Loops help automate repetitive tasks.
- With break and continue you control the flow of loops.
