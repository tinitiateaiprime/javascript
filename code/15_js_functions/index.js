// JavaScript: Functions Concept Tutorial
// ======================================

// FUNCTION:
// A function is a block of code that performs a specific task.
// We can reuse it many times without rewriting code.

// WHY FUNCTIONS ARE USED:
// - avoid repeating code
// - make code reusable
// - organize logic into small parts

// TYPES OF FUNCTIONS:
// 1. Function Declaration
// 2. Function Expression
// 3. Arrow Function
// 4. Parameterized Function
// 5. Return Function

// =========================
// 1. FUNCTION DECLARATION
// =========================

function greet() {
  console.log("Hello User");
}

greet();

// =========================
// 2. PARAMETERIZED FUNCTION
// =========================

function sayHello(name) {
  console.log("Hello", name);
}

sayHello("Asha");

// =========================
// 3. FUNCTION WITH RETURN
// =========================

function add(a, b) {
  return a + b;
}

const result = add(5, 3);
console.log("Sum:", result);

// =========================
// 4. FUNCTION EXPRESSION
// =========================

const multiply = function (a, b) {
  return a * b;
};

console.log("Multiply:", multiply(4, 2));

// =========================
// 5. ARROW FUNCTION
// =========================

const divide = (a, b) => {
  return a / b;
};

console.log("Divide:", divide(10, 2));

// =========================
// WHERE FUNCTIONS ARE USED:
// =========================
// - login systems
// - calculations
// - form validation
// - repeating tasks

// =========================
// WHERE ERRORS HAPPEN:
// =========================

// 1. Function not defined
// console.log(test()); ❌ ReferenceError

// 2. Missing arguments
function demo(a, b) {
  return a + b;
}

console.log(demo(5)); // NaN or undefined result

// 3. Wrong return usage
function wrong() {
  return;
  console.log("This will not run");
}

// =========================
// SUMMARY:
// =========================
// - function = reusable block of code
// - helps avoid repetition
// - improves structure of code
// - types: declaration, expression, arrow, return, parameterized