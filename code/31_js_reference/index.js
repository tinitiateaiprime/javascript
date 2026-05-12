// JavaScript: Reference Concept Tutorial
// ======================================

// REFERENCE:
// In JavaScript, reference means a variable does NOT store the actual value,
// it stores the "address" (link) to the value in memory.

// WHY REFERENCE IS IMPORTANT:
// - objects, arrays, and functions are stored by reference
// - changes in one variable can affect another
// - helps manage large data efficiently

// =========================
// EXAMPLE (VALUE TYPES)
// =========================

const word = "reference";

console.log(word.toUpperCase());
console.log(Math.max(3, 8));

// Strings and numbers are VALUE TYPES (copy is stored)

// =========================
// REFERENCE TYPES (IMPORTANT)
// =========================

// Arrays and objects are stored by reference

const arr1 = [1, 2, 3];
const arr2 = arr1; // same reference

arr2.push(4);

console.log("arr1:", arr1); // [1,2,3,4]
console.log("arr2:", arr2); // [1,2,3,4]

// =========================
// WHERE REFERENCE IS USED:
// =========================
// - arrays
// - objects
// - functions
// - state management in apps

// =========================
// WHERE ERRORS/ISSUES HAPPEN:
// =========================

// 1. Unexpected change (shared reference problem)
const user1 = { name: "Asha" };
const user2 = user1;

user2.name = "Ravi";

console.log(user1.name); // Ravi ❌ unexpected change

// 2. Accidental data overwrite
const list1 = [1, 2];
const list2 = list1;

list2.push(3); // changes both

// 3. Confusing copy vs reference
const a = [1, 2];
const b = a; // not a real copy

// =========================
// HOW TO FIX REFERENCE ISSUES:
// =========================

// FIX 1: Create real copy of array
const safeList1 = [1, 2];
const safeList2 = [...safeList1]; // copy

safeList2.push(3);

console.log(safeList1); // [1,2]
console.log(safeList2); // [1,2,3]

// FIX 2: Copy object properly
const safeUser1 = { name: "Asha" };
const safeUser2 = { ...safeUser1 };

safeUser2.name = "Ravi";

// FIX 3: Be careful when assigning arrays/objects
const original = [10, 20];
const copy = Array.from(original);

// =========================
// SUMMARY:
// =========================
// - reference = memory link to value
// - arrays & objects use reference
// - changing one can affect another
// - fix = use spread (...) or Array.from() for copying