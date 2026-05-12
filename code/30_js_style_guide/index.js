// JavaScript: Style Guide Concept Tutorial
// =======================================

// STYLE GUIDE:
// A style guide is a set of rules for writing code in a consistent way.

// WHY STYLE GUIDE IS USED:
// - keeps code clean and readable
// - helps team collaboration
// - reduces mistakes
// - makes debugging easier

// =========================
// GOOD STYLE EXAMPLE
// =========================

const subtotal = 100;
const tax = 18;
const total = subtotal + tax;

console.log("subtotal:", subtotal);
console.log("tax:", tax);
console.log("total:", total);

// =========================
// WHERE STYLE GUIDE IS USED:
// =========================
// - naming variables
// - spacing and indentation
// - function structure
// - consistent formatting

// =========================
// WHAT ERRORS CAN HAPPEN:
// =========================

// 1. Not a runtime error, but confusion error
const SubTotal = 100; // ❌ inconsistent naming style
const TAX = 18;       // ❌ different style

// 2. Hard to read code → leads to logic mistakes
const a=100;const b=18;const c=a+b; // ❌ poor readability

// 3. Wrong naming → future bugs
const totalPrice = 100;
const totalprice = 200; // ❌ looks same but different variable

// =========================
// HOW TO FIX STYLE ISSUES:
// =========================

// FIX 1: Use camelCase
const totalPrice = 100;

// FIX 2: Add proper spacing
const sum = subtotal + tax;

// FIX 3: Keep consistent naming everywhere
const userName = "Asha";
const userAge = 20;

// FIX 4: Follow same structure always
function calculateTotal(a, b) {
  return a + b;
}

// =========================
// IMPORTANT NOTE:
// =========================
// Style guide issues do NOT crash code,
// but they cause confusion and hidden bugs.

// =========================
// SUMMARY:
// =========================
// - style guide = rules for writing clean code
// - improves readability and teamwork
// - not a direct error, but prevents future mistakes