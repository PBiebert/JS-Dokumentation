"use strict";

let myCondition = true;
// output: true

//! "!" = NOT operator
myCondition = !myCondition; // output: false

//! "||" = OR operator
// If at least one value is true, the result is true
myCondition = true || false || true; // output: true

//! "&&" = AND operator
// If both values are true, the result is true
// If one value is false, the result is false
myCondition = true && false; // output: false

//! "==" = equal (not strict)
// Checks if value one and value two are equal (not strict)
// Types can be different
myCondition = 45 == 45; // output: true
myCondition = 45 == "45"; // output: true

//! "===" = equal (strict)
// Checks if value one and value two are equal (strict)
// Types must be the same
myCondition = 45 === 45; // output: true
myCondition = 45 === "45"; // output: false

//! ">" = greater than
// Checks if value one is greater than value two
myCondition = 45 > 123; // output: false

//! "<" = less than
// Checks if value one is less than value two
myCondition = 45 < 123; // output: true

//! ">=" = greater than or equal to
// Checks if value one is greater than or equal to value two
myCondition = 45 >= 123; // output: false

//! "<=" = less than or equal to
// Checks if value one is less than or equal to value two
myCondition = 45 <= 123; // output: true

//! Comparison operators + NOT operator
// Using "not equal to"
myCondition = 45 != "47"; // output: true
myCondition = 45 !== 47; // output: true
myCondition = 45 !== "45"; // output: true

console.log(myCondition);

//! "boolean ? val1 : val2" ternary-operator
// Short way to write an if-else condition in one line
// If condition is true, val1 is returned, otherwise val2
// Syntax: condition ? valueIfTrue : valueIfFalse
let lang = "de";
let myTitle = lang == "de" ? "Webseite" : "Website"; // output: "Webseite"

//! "if else" condition
// First it checks if condition one is true.
// If condition one is false, it checks if condition two is true.
// If both are false, the "else" block is executed.
let myIfCondition = false;
let mySecondIfCondition = false;

if (myIfCondition) {
  console.log("First condition is true");
} else if (mySecondIfCondition) {
  console.log("Second condition is true");
} else {
  console.log("Neither condition is true -> else block executed");
}

//! "switch" Switch/Case condition
// Switch statement checks a value against multiple possible cases
// Each "case" corresponds to a possible value
// "break" ends the respective case and prevents fall-through
// "default" is executed when no case matches

function collorCheck(color) {
  let colorCode;

  switch (color) {
    case "red":
      colorCode = "#ba190eff"; // Red
      break;

    case "green":
      colorCode = "#0eba1eff"; // Green
      break;

    case "blue":
      colorCode = "#1e0eba"; // Blue
      break;

    default:
      colorCode = "#210eba"; // Default color (Purple)
      break;
  }

  return colorCode; // Returns the color code
}
