// JavaScript: Versions Concept Tutorial
// ======================================

// VERSIONS:
// JavaScript versions mean updates of JavaScript language over time.

// WHY VERSIONS ARE USED:
// - to add new features
// - to improve performance
// - to fix old problems
// - to make code safer and easier

// =========================
// OLD vs MODERN JAVASCRIPT
// =========================

// OLD STYLE (before ES6)
var oldStyle = "Older JavaScript used var only";

// MODERN JAVASCRIPT (ES6+)
const modernFeatures = ["let", "const", "classes"];

// =========================
// WHERE VERSIONS ARE USED:
// =========================
// - variable declarations (var → let/const)
// - functions (old vs arrow functions)
// - classes (modern OOP)
// - modules (import/export)

// =========================
// WHERE ERRORS HAPPEN (VERSION ISSUES):
// =========================

// 1. Using modern code in old browser
// const x = () => {} ❌ may fail in very old browsers

// 2. Using unsupported features
// class A {} ❌ not supported in very old JS engines

// 3. Mixing old + new style incorrectly
var name = "Asha";
let name = "Ravi"; // ❌ ERROR: already declared

// 4. Browser compatibility issues
// fetch() ❌ may fail in older environments

// =========================
// HOW TO FIX VERSION ISSUES:
// =========================

// FIX 1: Use modern JS (ES6+)
const name = "Asha";
const age = 20;

// FIX 2: Use transpilers (Babel) for old browsers
// converts modern JS → old JS automatically

// FIX 3: Check compatibility
if (typeof fetch !== "undefined") {
  console.log("fetch is supported");
}

// FIX 4: Avoid mixing var and let/const badly
const city = "Hyderabad";

// =========================
// SUMMARY:
// =========================
// - JavaScript versions = updates of language
// - modern JS = let, const, classes, arrow functions
// - old JS = var, older syntax
// - errors happen due to compatibility issues
// - fix = use modern JS + check browser support