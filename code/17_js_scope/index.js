// JavaScript: Scope Concept Tutorial
// ===================================

// SCOPE:
// Scope means "where a variable can be used in code".

// WHY SCOPE IS IMPORTANT:
// - controls variable access
// - avoids conflicts
// - improves code safety

// TYPES OF SCOPE:
// 1. Global Scope
// 2. Function Scope (Local Scope)
// 3. Block Scope

// =========================
// 1. GLOBAL SCOPE
// =========================

const globalMessage = "I am global";

// Global scope → can be used anywhere in file

console.log(globalMessage);

// =========================
// 2. FUNCTION SCOPE
// =========================

function testScope() {
  const localMessage = "I am inside function";

  console.log(localMessage);
  console.log(globalMessage);
}

testScope();

// =========================
// 3. BLOCK SCOPE
// =========================

if (true) {
  const blockMessage = "I exist only inside this block";

  console.log(blockMessage);
}

// ❌ ERROR CASE:
// console.log(blockMessage);

// ERROR:
// ReferenceError: blockMessage is not defined

// HOW TO FIX THIS ERROR:
// ✔ Move variable outside block
// ✔ OR use it inside the same block

const fixedBlockMessage = "Now I can use outside block";

if (true) {
  console.log(fixedBlockMessage);
}

// =========================
// ERROR EXAMPLES + SOLUTIONS
// =========================

// 1. FUNCTION SCOPE ERROR
function demo() {
  const inside = "inside function";
}

// console.log(inside); ❌ ERROR

// FIX:
// move outside function OR use inside function
function demoFixed() {
  const inside = "inside function";
  console.log(inside); // ✔ correct
}
demoFixed();

// 2. BLOCK SCOPE ERROR
if (true) {
  const value = 10;
}

// console.log(value); ❌ ERROR

// FIX:
let valueFixed;
if (true) {
  valueFixed = 10;
}
console.log(valueFixed); // ✔ correct

// 3. USING BEFORE DECLARATION ERROR
// console.log(x); ❌ ERROR

const x = 5;
console.log(x); // ✔ correct usage

// HOW TO FIX:
// always declare variable BEFORE using it

// =========================
// SUMMARY:
// =========================
// - scope = where variable can be accessed
// - global = anywhere
// - function = inside function only
// - block = inside { } only
// - errors happen when variable is used outside its scope
// - fix = move variable to correct scope or use inside proper block/function