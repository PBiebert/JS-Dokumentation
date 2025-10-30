[Back to Table of Contents](../README.md)

# Local Storage in JavaScript

## What is Local Storage?

Local Storage is a browser feature that lets you store data directly in the user's browser. The data remains even after closing and reopening the browser. Everything is stored as a string.

---

## Simple Usage Example

```js
// Initial array with example data
let myData = ["Banana", "not Banana", "Apple"];
```

---

## Storing Data in Local Storage

**localStorage.setItem(key, value)** stores a value under a key. The value must be a string, so arrays or objects are converted with **JSON.stringify()**.

```js
function saveToLocalStorage() {
  localStorage.setItem("myData", JSON.stringify(myData));
}
```

---

## Loading Data from Local Storage

**localStorage.getItem(key)** reads a value by key. With **JSON.parse()** you convert the string back into an array or object.

```js
function getFromLocalStorage() {
  let myArray = JSON.parse(localStorage.getItem("myData"));
  if (myArray == null) {
    myData = [];
  } else {
    myData = myArray;
  }
}
```

---

## Adding and Saving New Data

You can add new data to the array and then save it in Local Storage.

```js
function saveData() {
  let inputRef = document.getElementById("dataInput");
  if (inputRef.value != "") {
    myData.push(inputRef.value);
  }
  saveToLocalStorage();
  render();
  inputRef.value = "";
}
```

---

## Displaying Data on the Page

You can display the data from the array in the HTML, e.g. as a list or as paragraphs.

```js
function render() {
  let contentRef = document.getElementById("content");
  contentRef.innerHTML = "";
  for (let i = 0; i < myData.length; i++) {
    contentRef.innerHTML += `<p>${myData[i]}</p>`;
  }
}
```

---

## Initialization

When loading the page, you can load and display the data from Local Storage.

```js
function init() {
  getFromLocalStorage();
  render();
}
```

---

## Summary

- With Local Storage you can permanently store data in the browser.
- With **JSON.stringify()** and **JSON.parse()** you store and load arrays or objects.
- Data is always stored as a string.
- Useful for saving user input, settings, or lists locally.
