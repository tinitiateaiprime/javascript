// JavaScript: Data Types Concept Tutorial
// =======================================

// DATA TYPES:
// Data type means the kind of value stored in a variable.

// WHY DATA TYPES ARE USED:
// - JavaScript needs to understand what kind of data it is working with
// - helps in calculations, logic, and comparisons
// - prevents unexpected errors

// =========================
// COMMON DATA TYPES
// =========================

// 1. STRING (text)
const title = "JavaScript";

// 2. NUMBER (numeric value)
const year = 2026;

// 3. BOOLEAN (true / false)
const isUseful = true;

// 4. ARRAY (list of values)
const topics = ["types", "arrays"];

// 5. OBJECT (key-value pairs)
const course = { name: "JavaScript", level: "beginner" };

// CHECK TYPE USING typeof
console.log("typeof title:", typeof title);
console.log("typeof year:", typeof year);
console.log("typeof isUseful:", typeof isUseful);
console.log("typeof topics:", typeof topics); // object (important note)
console.log("typeof course:", typeof course);

// =========================
// IMPORTANT NOTES:
// =========================
// - array is technically an object in JavaScript
// - typeof null also returns "object" (known JavaScript bug)

// =========================
// WHERE DATA TYPES ARE USED:
// =========================
// - form input validation
// - calculations (numbers)
// - text processing (strings)
// - logic decisions (booleans)
// - storing structured data (objects, arrays)

// =========================
// WHERE ERRORS HAPPEN:
// =========================

// 1. Wrong type usage
const num = "10";
// console.log(num + 5); // "105" (string concat, not math)

// 2. Using methods on wrong type
const value = 100;
// value.toUpperCase(); ❌ ERROR (numbers have no string methods)

// 3. Undefined variables
// console.log(x); ❌ ReferenceError

// 4. Expecting array but getting object
const data = { a: 1 };
// data.push(2); ❌ ERROR (object has no push)

// =========================
// HOW TO FIX ERRORS:
// =========================

// FIX 1: Convert types properly
console.log(Number("10") + 5); // 15

// FIX 2: Check type before use
if (typeof value === "number") {
  console.log(value + 10);
}

// FIX 3: Check array correctly
if (Array.isArray(topics)) {
  topics.push("functions");
}

// FIX 4: Ensure variable exists
if (typeof x !== "undefined") {
  console.log(x);
}

// =========================
// SUMMARY:
// =========================
// - data types define what kind of value we store
// - JavaScript types: string, number, boolean, array, object
// - errors happen due to wrong type usage
// - fix = check type before using + convert when needed