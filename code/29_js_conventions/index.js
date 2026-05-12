// JavaScript: Conventions Concept Tutorial
// ========================================

// CONVENTIONS:
// Conventions are a set of agreed rules for writing clean and readable code.

// WHY CONVENTIONS ARE USED:
// - makes code easy to read
// - helps teamwork
// - reduces confusion
// - improves debugging

// =========================
// COMMON JAVASCRIPT CONVENTIONS
// =========================

// 1. camelCase for variables and functions
const firstName = "Asha";
const totalScore = 95;

// 2. meaningful names (not x, y, a1)
function createLabel(name, score) {
  return name + " scored " + score;
}

console.log(createLabel(firstName, totalScore));

// =========================
// WHERE CONVENTIONS ARE USED:
// =========================
// - variable naming
// - function naming
// - file structure
// - team coding standards

// =========================
// WHERE ERRORS MAY COME:
// =========================

// 1. Wrong naming style (not error, but bad practice)
const firstname = "Asha"; // should be firstName

// 2. Confusing variable names (logic mistakes)
const a = 95; // ❌ unclear meaning

// 3. Case sensitivity mistake
const FirstName = "Asha";
// console.log(firstname); ❌ ReferenceError (different variable)

// 4. Function name confusion
function CreateLabel() {} // ❌ should be camelCase: createLabel

// =========================
// HOW TO FIX ISSUES:
// =========================

// FIX 1: Always use camelCase
const userName = "Asha";

// FIX 2: Use meaningful names
const studentScore = 95;

// FIX 3: Be consistent everywhere
const first_name = "Asha"; // avoid mixing styles

// FIX 4: Follow team rules / style guide
// (same format for all files)

// =========================
// SUMMARY:
// =========================
// - conventions = rules for writing clean code
// - helps readability and teamwork
// - not runtime errors, but reduces mistakes
// - errors happen due to inconsistent or wrong naming