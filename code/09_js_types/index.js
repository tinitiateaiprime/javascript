// JavaScript: Types Concept Tutorial
// ==================================

// TYPES in JavaScript
// Type means: what kind of value we are storing in a variable

// 1. String type (text)
const textValue = "Hello";

// 2. Number type (numeric value)
const numberValue = 42;

// 3. Boolean type (true or false)
const booleanValue = true;

// 4. Undefined type (no value assigned yet)
let missingValue;

// 5. Null type (intentional empty value)
const emptyValue = null;

// Print values
console.log(textValue);
console.log(numberValue);
console.log(booleanValue);
console.log(missingValue);
console.log(emptyValue);

// Check types using typeof
console.log(typeof textValue);
console.log(typeof numberValue);
console.log(typeof booleanValue);
console.log(typeof missingValue);
console.log(typeof emptyValue);

/*
  HOW TYPES WORK:

  - String → text ("Hello")
  - Number → numbers (42)
  - Boolean → true / false
  - Undefined → variable declared but no value
  - Null → empty value (intentional)

  ERROR NOTE:

  JavaScript will NOT throw error for types automatically,
  but wrong type usage can cause bugs.

  Example:
*/


// Wrong usage example (logical issue, not error)
const age = "25"; // string
console.log(age + 5); // result will be "255" (not 30)