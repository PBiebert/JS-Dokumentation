"use strict";

function scopeTest() {
  if (true) {
    let testScopeVar = "hello world";
  }
  console.log(testScopeVar);
}
