"use strict";

//! Selectors

// "getElementById" - returns the first element with the specified ID
let title = document.getElementById("websiteTitel");

// "getElementsByClassName" - returns an HTMLCollection of all elements with the class
let boxes = document.getElementsByClassName("box");

// "getElementsByTagName" - returns an HTMLCollection of all elements with the tag
let paragraphs = document.getElementsByTagName("p");

// "querySelector / querySelectorAll"
let firstDiv = document.querySelector("#testDiv"); // first element that matches the CSS selector
let allDivs = document.querySelectorAll("div"); // NodeList of all div elements
let firstBox = document.querySelector(".box"); // first element with class 'box'

//====================================================================================================

//! innerHTML

// ".innerHTML" - get or set the HTML content of an element
console.log(title.innerHTML); // read current HTML content
title.innerHTML = "<p>test</p>"; // set content with HTML tags
title.innerHTML = "new text"; // replace all content with plain text

//====================================================================================================

//! innerText

// ".innerText" - get or set the visible text of an element (ignores HTML tags)
document.getElementById("testDiv").innerText = "test";

//====================================================================================================

//! classList

// ".classList.add()" - adds a class to the element
document.getElementById("testDiv").classList.add("green_bg");

// ".classList.remove()" - removes a class from the element
document.getElementById("testDiv").classList.remove("green_bg");

// ".classList.toggle()" - toggles a class on/off
document.getElementById("testDiv").classList.toggle("green_bg");

// ".classList.contains()" - checks if the element has the class (returns true/false)
console.log(document.getElementById("testDiv").classList.contains("green_bg"));

// ".classList.replace()" - replaces an existing class with a new one
document.getElementById("testDiv").classList.replace("green_bg", "red_bg");

//====================================================================================================

//! setAttribute

// ".setAttribute()" - sets or overwrites an attribute of an element
document.getElementById("testInput").setAttribute("value", 15);

// ".getAttribute()" - reads the value of an attribute
console.log(document.getElementById("testInput").getAttribute("value"));

// ".removeAttribute()" - removes an attribute from the element
document.getElementById("testInput").removeAttribute("value");

//====================================================================================================

//! value (for form elements)

// set the value of an input field
document.getElementById("testInput").value = 20;

// read the value of an input field
console.log(document.getElementById("testInput").value);

//====================================================================================================

//! addEventListener

// "addEventListener" - registers a function to run when an event occurs
let button = document.getElementById("myButton");

// "click" - triggered when the element is clicked
button.addEventListener("click", () => {
  alert("Button clicked!");
});

// "mouseover" - triggered when the mouse enters the element
button.addEventListener("mouseover", () => {
  console.log("Mouse over the button");
});

// "mouseout" - triggered when the mouse leaves the element
button.addEventListener("mouseout", () => {
  console.log("Mouse left the button");
});

// "dblclick" - triggered on double click
button.addEventListener("dblclick", () => {
  console.log("Button double clicked");
});

// "keydown" - triggered when a key is pressed (anywhere on the page)
document.addEventListener("keydown", (event) => {
  console.log("Key pressed:", event.key);
});

// "keyup" - triggered when a key is released
document.addEventListener("keyup", (event) => {
  console.log("Key released:", event.key);
});

// "focus" - triggered when an input gets focus
let input = document.getElementById("testInput");
input.addEventListener("focus", () => {
  console.log("Input focused");
});

// "blur" - triggered when an input loses focus
input.addEventListener("blur", () => {
  console.log("Input blurred");
});

// "input" - triggered when the value of an input changes
input.addEventListener("input", (event) => {
  console.log("Current input value:", event.target.value);
});

// "submit" - triggered when a form is submitted
let form = document.getElementById("myForm");
form.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent page reload
  console.log("Form submitted!");
});

//====================================================================================================

//! Custom helper functions

// "toggleDNone" - toggles the "dNone" class to show/hide the element (display:none)
function toggleDNone(id) {
  document.getElementById(id).classList.toggle("dNone");
}

//====================================================================================================
