# Arrays and Loops in JavaScript

## Arrays – Basics

Arrays are lists of values. Indexing starts at 0.

```js
let myList = [12, "bannana", 1];
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

**.slice()** erstellt eine Kopie eines Array-Ausschnitts (von Start bis End-Index, End-Index exklusive).

```js
let arr = [1, 2, 3, 4, 5];
let subArr = arr.slice(1, 4); // [2, 3, 4]
```

### .join()

**.join()** verbindet alle Elemente zu einem String, getrennt durch das angegebene Zeichen.

```js
let joined = arr.join(" - "); // "1 - 2 - 3 - 4 - 5"
```

### Spread-Operator (...)

**...** kopiert oder erweitert Arrays.

```js
let copy = [...arr];
```

---

## Schleifen – Grundlagen

### for-Schleife

**for-Schleife**: Wiederholt Code, solange eine Bedingung erfüllt ist.

```js
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

### while-Schleife

**while-Schleife**: Führt Code aus, solange eine Bedingung true ist.

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

**forEach()**: Führt eine Funktion für jedes Element im Array aus.

```js
fruits.forEach((element) => {
  console.log(element);
});
```

---

## Schleifen – Beispiele

### Summe aller Elemente

```js
function sumArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return `${array.join(" + ")} = ${sum}`;
}
```

### Zahlenreihe erzeugen

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

### Zahlenreihe rückwärts

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

### Jedes dritte Element ausgeben

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

### Primzahl-Prüfung

```js
function isPrime(num) {
  if (num < 2) return `${num} ist keine Primzahl`;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return `${num} ist keine Primzahl`;
    }
  }
  return `${num} ist eine Primzahl`;
}
```

---

## Schleifen – Steuerbefehle

**break** beendet die aktuelle Schleife sofort.  
**continue** überspringt die aktuelle Iteration und macht mit der nächsten weiter.

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

## Zusammenfassung

- Arrays speichern Listen von Werten.
- Mit Methoden wie push, pop, shift, unshift, splice, slice, join, includes usw. kannst du Arrays flexibel bearbeiten.
- Schleifen helfen, wiederkehrende Aufgaben zu automatisieren.
- Mit break und continue steuerst du den Ablauf von Schleifen.
