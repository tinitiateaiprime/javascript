// JavaScript: Math Concept Tutorial
// ==================================

// MATH:
// Math is a built-in JavaScript object used for mathematical operations.

// WHY MATH IS USED:
// - rounding numbers
// - finding max/min values
// - random numbers
// - calculations

// =========================
// COMMON MATH METHODS
// =========================

const value = 4.6;

console.log("round 4.6:", Math.round(value)); // nearest integer
console.log("floor 4.6:", Math.floor(value)); // lower integer
console.log("ceil 4.6:", Math.ceil(value));   // upper integer

console.log("max:", Math.max(3, 8, 5)); // largest number
console.log("min:", Math.min(3, 8, 5)); // smallest number

console.log("random:", Math.random()); // 0 to 1 random value

// =========================
// WHERE MATH IS USED:
// =========================
// - games (random numbers)
// - finance apps (rounding prices)
// - statistics
// - calculations in apps

// =========================
// WHERE ERRORS HAPPEN:
// =========================

// 1. Typo in Math name
// math.round(4.6) ❌ ERROR (M must be capital)

// 2. Passing string instead of number
console.log(Math.round("4.6")); // works but may cause confusion

// 3. Using undefined value
let x;
console.log(Math.round(x)); // NaN (Not a Number)

// 4. Wrong method name
// Math.maximum(10, 20) ❌ ERROR (correct is Math.max)

// =========================
// HOW TO FIX ERRORS:
// =========================

// FIX 1: Always use correct spelling
console.log(Math.round(4.6));

// FIX 2: Ensure value is number
const safeValue = Number("4.6");
console.log(Math.round(safeValue));

// FIX 3: Check before using
if (typeof value === "number") {
  console.log(Math.floor(value));
}

// FIX 4: Use correct Math methods
console.log(Math.max(10, 20));
console.log(Math.min(10, 20));

// =========================
// SUMMARY:
// =========================
// - Math = built-in tool for calculations
// - used for rounding, random, max/min
// - errors happen due to typo or wrong data type
// - fix = correct method name + valid number input