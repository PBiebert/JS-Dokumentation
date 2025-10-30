# Scopes in JavaScript

## What is a Scope?

A scope determines where in the code you can access variables. In JavaScript, there are different types of scopes:

- **Global scope**: Variables declared outside of functions are visible everywhere in the code.
- **Function scope**: Variables declared with `var`, `let`, or `const` inside a function are only visible within that function.
- **Block scope**: Variables declared with `let` or `const` inside a block (e.g. if, for) are only visible within that block.

---

## Block Scope with let and const

**let** and **const** are block-scoped, meaning they are only visible within the surrounding block.

```js
function scopeTest() {
  if (true) {
    let testScopeVar = "hello world"; // Block scope
  }
  console.log(testScopeVar); // ReferenceError: testScopeVar is not defined
}
```

- `testScopeVar` is only visible inside the if block.
- Outside the block (but still in the function), accessing it causes an error.

---

## Function Scope with var

**var** is only function-scoped, not block-scoped. This means a variable declared with var is visible throughout the function, even outside of blocks.

```js
function varScopeTest() {
  if (true) {
    var testVar = "visible";
  }
  console.log(testVar); // Output: visible
}
```

- `testVar` is visible throughout the function, even outside the if block.

---

## Global Scope

Variables declared outside of functions are global and visible everywhere in the code.

```js
let globalVar = "I am global";

function showGlobal() {
  console.log(globalVar); // Output: I am global
}

showGlobal();
```

---

## Summary

- Use `let` and `const` for block-level visibility.
- Variables declared with `var` are only visible within the function.
- Avoid global variables to prevent errors and unexpected behavior.
- Scopes help keep variables clean and safe.
