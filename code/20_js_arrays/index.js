// JavaScript: Arrays Concept Tutorial
// ====================================

// ARRAY:
// Array is used to store multiple values in a single variable.
// It keeps values in order (index-based).

// WHY ARRAYS ARE USED:
// - store list of items
// - manage collections (fruits, users, numbers)
// - easy looping and access

// CREATE ARRAY
const fruits = ["apple", "banana", "mango"];

// ADD NEW ITEM
fruits.push("orange");

// ACCESS ARRAY ITEMS
console.log("first fruit:", fruits[0]); // index starts from 0

// ARRAY LENGTH
console.log("number of fruits:", fruits.length);

// ALL ITEMS AS STRING
console.log("all fruits:", fruits.join(", "));

// =========================
// WHERE ARRAYS ARE USED:
// =========================
// - product lists
// - user lists
// - shopping cart items
// - scores, marks, data collections

// =========================
// WHERE ERRORS HAPPEN:
// =========================

// 1. Accessing wrong index
console.log(fruits[10]); // undefined (not error, but no value)

// 2. Using array before declaration
// console.log(items); ❌ ReferenceError

// 3. Using methods on non-array
const wrong = "apple";
// wrong.push("banana"); ❌ ERROR (string has no push method)

// 4. Forgetting brackets
// const arr = "apple, banana"; ❌ not an array

// =========================
// HOW TO FIX ERRORS:
// =========================

// FIX 1: Always create array properly
const safeArray = ["a", "b", "c"];

// FIX 2: Check before using methods
if (Array.isArray(safeArray)) {
  safeArray.push("d");
}

// FIX 3: Ensure variable is array before using array methods
const maybeArray = [];

if (Array.isArray(maybeArray)) {
  console.log(maybeArray.length);
}

// =========================
// SUMMARY:
// =========================
// - array = list of values
// - uses index starting from 0
// - used for collections of data
// - errors happen when using wrong type or undefined variable
// - fix = use proper array check and correct initialization