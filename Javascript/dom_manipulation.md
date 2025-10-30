# DOM Manipulation in JavaScript

## What is the DOM?

The DOM (Document Object Model) is the interface that allows you to read, change, and react to HTML elements using JavaScript.

---

## Selectors

Selectors let you select elements in HTML:

```js
// ID selector
let title = document.getElementById("websiteTitel");

// Class selector
let boxes = document.getElementsByClassName("box");

// Tag selector
let paragraphs = document.getElementsByTagName("p");

// CSS selectors
let firstDiv = document.querySelector("#testDiv"); // First element with matching selector
let allDivs = document.querySelectorAll("div"); // All <div> elements
let firstBox = document.querySelector(".box"); // First element with class 'box'
```

---

## Changing Element Content

**.innerHTML** reads or sets the HTML content of an element.

**.innerText** reads or sets the visible text (without HTML tags).

```js
console.log(title.innerHTML); // Current HTML content
title.innerHTML = "<p>test</p>"; // Set new HTML content
title.innerHTML = "new text"; // Set only text
document.getElementById("testDiv").innerText = "test"; // Set visible text
```

---

## Editing Classes

With **.classList** you can add, remove, toggle, or check classes:

```js
document.getElementById("testDiv").classList.add("green_bg"); // Add
document.getElementById("testDiv").classList.remove("green_bg"); // Remove
document.getElementById("testDiv").classList.toggle("green_bg"); // Toggle
console.log(document.getElementById("testDiv").classList.contains("green_bg")); // Check

document.getElementById("testDiv").classList.replace("green_bg", "red_bg"); // Replace
```

---

## Editing Attributes

With **.setAttribute()**, **.getAttribute()**, and **.removeAttribute()** you can set, read, or remove attributes:

```js
document.getElementById("testInput").setAttribute("value", 15);
console.log(document.getElementById("testInput").getAttribute("value"));
document.getElementById("testInput").removeAttribute("value");
```

---

## Values of Form Elements

With **.value** you read or set the value of an input field:

```js
document.getElementById("testInput").value = 20;
console.log(document.getElementById("testInput").value);
```

---

## Events and EventListener

With **addEventListener** you can react to various events in the DOM. Here are some important events:

### Click Event

**"click"** is triggered when an element is clicked.

```js
let button = document.getElementById("myButton");
button.addEventListener("click", () => {
  alert("Button clicked!");
});
```

### Mouse Events

**"mouseover"** is triggered when the mouse moves over an element.  
**"mouseout"** is triggered when the mouse leaves the element.  
**"dblclick"** is triggered on double click.

```js
button.addEventListener("mouseover", () => {
  console.log("Mouse over the button");
});
button.addEventListener("mouseout", () => {
  console.log("Mouse left the button");
});
button.addEventListener("dblclick", () => {
  console.log("Button double clicked");
});
```

### Keyboard Events

**"keydown"** is triggered when a key is pressed.  
**"keyup"** is triggered when a key is released.

```js
document.addEventListener("keydown", (event) => {
  console.log("Key pressed:", event.key);
});
document.addEventListener("keyup", (event) => {
  console.log("Key released:", event.key);
});
```

### Focus Events on Inputs

**"focus"** is triggered when an input field gets focus.  
**"blur"** is triggered when the input field loses focus.  
**"input"** is triggered when the value of an input field changes.

```js
let input = document.getElementById("testInput");
input.addEventListener("focus", () => {
  console.log("Input in focus");
});
input.addEventListener("blur", () => {
  console.log("Input no longer in focus");
});
input.addEventListener("input", (event) => {
  console.log("Current value:", event.target.value);
});
```

### Form Event

**"submit"** is triggered when a form is submitted.

```js
let form = document.getElementById("myForm");
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevents page reload
  console.log("Form submitted!");
});
```

---

## Custom Helper Functions

You can write your own functions to manipulate DOM elements:

```js
// Toggles an element's visibility by toggling the class "dNone" (display:none)
function toggleDNone(id) {
  document.getElementById(id).classList.toggle("dNone");
}
```

---

## Summary

- With DOM methods you can specifically select and change HTML elements.
- With event listeners you react to user actions.
- With your own functions you can easily solve recurring tasks in the DOM.
