// JavaScript: Statements Concept Tutorial
// =======================================

// STATEMENTS:
// A statement is a single instruction in JavaScript that performs an action.

// WHY STATEMENTS ARE USED:
// - to perform actions step by step
// - to control program flow
// - to execute logic (conditions, loops, calculations)

// =========================
// EXAMPLES OF STATEMENTS
// =========================

// variable statement
let total = 0;
total = total + 5;

// if statement (decision making)
if (total > 3) {
  console.log("total is greater than 3");
}

// for loop statement (repetition)
for (let step = 1; step <= 2; step++) {
  console.log("step:", step);
}

// =========================
// WHERE STATEMENTS ARE USED:
// =========================
// - calculations
// - decisions (if/else)
// - loops (for/while)
// - function execution
// - program flow control

// =========================
// WHERE ERRORS HAPPEN:
// =========================

// 1. Missing semicolon or syntax issue
let x = 10
// console.log(x ❌ missing bracket or semicolon

// 2. Wrong condition syntax
// if total > 3 ❌ missing parentheses
if (total > 3) {
  console.log("ok");
}

// 3. Infinite loop (logic error)
for (let i = 0; i >= 0; i++) {
  // ❌ never stops (bad condition)
  break; // fix required
}

// 4. Using variables before declaration
// console.log(a); ❌ ReferenceError
let a = 5;

// =========================
// HOW TO FIX ERRORS:
// =========================

// FIX 1: Always use correct syntax
let y = 20;

// FIX 2: Use proper condition format
if (y > 10) {
  console.log("greater");
}

// FIX 3: Ensure loop has stop condition
for (let i = 0; i < 3; i++) {
  console.log(i);
}

// FIX 4: Declare variables before using
let z = 30;
console.log(z);

// =========================
// SUMMARY:
// =========================
// - statement = single instruction in code
// - used for logic, loops, conditions
// - errors happen due to syntax or logic mistakes
// - fix = correct syntax + proper conditions