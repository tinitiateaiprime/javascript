// JavaScript: Debugging Concept Tutorial
// ======================================

// DEBUGGING:
// Debugging means finding and fixing errors or unexpected behavior in code.

// WHY DEBUGGING IS USED:
// - to find mistakes in code
// - to understand why output is wrong
// - to test values step-by-step
// - to fix logic errors

// =========================
// SIMPLE EXAMPLE
// =========================

const price = 50;
const discount = 10;
const finalPrice = price - discount;

// DEBUG LOG (checking value step-by-step)
console.log("Debug finalPrice:", finalPrice);

// =========================
// WHERE DEBUGGING IS USED:
// =========================
// - checking variables values
// - verifying calculations
// - tracking program flow
// - fixing logic issues

// =========================
// COMMON ERRORS FOUND DURING DEBUGGING:
// =========================

// 1. Wrong calculation
const a = 10;
const b = 5;
const wrongTotal = a + b * 2; // might give unexpected result

// FIX: use brackets
const correctTotal = (a + b) * 2;

// 2. Undefined variable
// console.log(x); ❌ ReferenceError

// 3. Wrong data type
const value = "10";
// console.log(value * 2); // works but can confuse logic

// 4. Logic error (no crash but wrong output)
const age = 15;
const canVote = age > 18; // false (correct logic check needed)

// =========================
// HOW TO FIX DEBUGGING ISSUES:
// =========================

// FIX 1: Use console.log() step by step
console.log("price:", price);
console.log("discount:", discount);

// FIX 2: Check values before calculation
if (typeof price === "number" && typeof discount === "number") {
  console.log(price - discount);
}

// FIX 3: Break complex logic into steps
const step1 = price - discount;
console.log("step1:", step1);

// FIX 4: Use meaningful variable names
const originalPrice = 50;
const discountAmount = 10;

// =========================
// SUMMARY:
// =========================
// - debugging = finding and fixing errors
// - helps understand code flow
// - most common tool = console.log()
// - errors can be syntax, runtime, or logic mistakes