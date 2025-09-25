"use strict";

let count = 0;

function init() {
  debbugerOutput("init");
  testTwo("testTwo");
}

function testOne() {
  debbugerOutput("testOne");
}

function testTwo(text) {
  debbugerOutput(text);
}

function debbugerOutput(text) {
  count++;
  let debbugerLogRef = document.getElementById("debbuger_log");
  debbugerLogRef.innerHTML = text + count;
}
