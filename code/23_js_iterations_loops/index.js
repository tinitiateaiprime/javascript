// JavaScript: Iterations / Loops Concept Tutorial
// ===============================================

// ITERATION:
// Iteration means repeating a block of code for each item in a list or object.

// WHY ITERATIONS ARE USED:
// - process arrays (lists)
// - read object data
// - repeat tasks automatically

// =========================
// 1. for...of LOOP (ARRAYS)
// =========================

const tools = ["HTML", "CSS", "JavaScript"];

for (const tool of tools) {
  console.log("tool:", tool);
}

// for...of is used for arrays (values directly)

// =========================
// 2. for...in LOOP (OBJECTS)
// =========================

const student = {
  name: "Asha",
  level: "beginner"
};

for (const key in student) {
  console.log(key + ":", student[key]);
}

// for...in is used for object keys

// =========================
// WHERE ITERATIONS ARE USED:
// =========================
// - list of products
// - user data
// - student records
// - API data loops

// =========================
// WHERE ERRORS HAPPEN:
// =========================

// 1. Using for...of on object ❌
const obj = { a: 1, b: 2 };
// for (const item of obj) {} ❌ ERROR (object is not iterable)

// 2. Using for...in on array incorrectly
const arr = [1, 2, 3];
// for (const key in arr) ❌ works but gives index, often confusion

// 3. Using wrong variable type
// for (const x of undefined) ❌ ERROR

// 4. Accessing wrong key in object
console.log(student.age); // undefined (no error but wrong value)

// =========================
// HOW TO FIX ERRORS:
// =========================

// FIX 1: Use correct loop type
// Array → for...of
// Object → for...in

// FIX 2: Check data before looping
if (Array.isArray(tools)) {
  for (const tool of tools) {
    console.log(tool);
  }
}

// FIX 3: Ensure variable exists
if (student) {
  for (const key in student) {
    console.log(key, student[key]);
  }
}

// =========================
// SUMMARY:
// =========================
// - iteration = repeating over data
// - for...of → arrays
// - for...in → objects
// - errors happen when wrong loop is used on wrong data type
// - fix = check type and use correct loop