# Conditionals and Comparison Operators

## What are Conditionals?

Conditionals control whether a certain block of code is executed or not. For this, you use comparison and logical operators.

---

## Logical Operators

### NOT Operator (!)

**!** inverts the boolean value (true becomes false, false becomes true).

```js
let myCondition = true;
myCondition = !myCondition; // Result: false
```

### OR Operator (||)

**||** returns true if at least one value is true.

```js
myCondition = true || false || true; // Result: true
```

### AND Operator (&&)

**&&** returns true only if both values are true.

```js
myCondition = true && false; // Result: false
```

---

## Comparison Operators

### Equality (== and ===)

**==** checks if two values are equal (not strict, types can differ).  
**===** checks if two values are equal and of the same type (strict).

```js
myCondition = 45 == 45; // true
myCondition = 45 == "45"; // true
myCondition = 45 === 45; // true
myCondition = 45 === "45"; // false
```

### Greater/Less Than

**>** checks if the left value is greater.  
**<** checks if the left value is less.  
**>=** checks if the left value is greater or equal.  
**<=** checks if the left value is less or equal.

```js
myCondition = 45 > 123; // false
myCondition = 45 < 123; // true
myCondition = 45 >= 123; // false
myCondition = 45 <= 123; // true
```

### Not Equal (!= and !==)

**!=** checks if two values are not equal (not strict).  
**!==** checks if two values are not equal or of different types (strict).

```js
myCondition = 45 != "47"; // true
myCondition = 45 !== 47; // true
myCondition = 45 !== "45"; // true
```

---

## Ternary Operator (Short If)

The ternary operator lets you write a condition in a single line:

```js
let lang = "de";
let myTitle = lang == "de" ? "Webseite" : "Website"; // Result: "Webseite"
```

---

## if-else Condition

With if-else you can check for different cases:

```js
let myIfCondition = false;
let mySecondIfCondition = false;

if (myIfCondition) {
  console.log("First condition is true");
} else if (mySecondIfCondition) {
  console.log("Second condition is true");
} else {
  console.log("No condition is true -> else block is executed");
}
```

---

## switch/case

With switch/case you can check a value against multiple possible cases:

```js
function colorCheck(color) {
  let colorCode;
  switch (color) {
    case "red":
      colorCode = "#ba190eff";
      break;
    case "green":
      colorCode = "#0eba1eff";
      break;
    case "blue":
      colorCode = "#1e0eba";
      break;
    default:
      colorCode = "#210eba";
      break;
  }
  return colorCode;
}
```

---

## Summary

- Conditionals control the program flow.
- Logical operators (&&, ||, !) and comparison operators (==, ===, >, <, ...) are the basis for conditions.
- With if-else and switch/case you can check for different cases.
- The ternary operator is a short form for simple conditions.
