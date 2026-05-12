// JavaScript: Errors Concept Tutorial
// ====================================

// ERROR:
// An error is a problem in code that stops normal execution
// or produces unexpected behavior.

// WHY ERRORS HAPPEN:
// - wrong syntax
// - invalid data
// - missing variables
// - incorrect function usage

// WHY ERROR HANDLING IS USED:
// - to prevent app crash
// - to handle failures safely
// - to show meaningful messages to user

// =========================
// TRY - CATCH - FINALLY
// =========================

// try: code that might fail
// catch: handles the error
// finally: always runs (success or fail)

try {
  JSON.parse("{ bad json }"); // invalid JSON → ERROR
  console.log("JSON parsed successfully");
} catch (error) {
  console.log("Caught error:", error.message);
} finally {
  console.log("finally always runs");
}

// =========================
// WHERE ERRORS HAPPEN:
// =========================

// 1. Syntax Error
// console.log("Hello ❌ missing bracket

// 2. Reference Error
// console.log(x); ❌ x is not defined

// 3. Type Error
const num = 10;
// num.toUpperCase(); ❌ number has no string method

// 4. JSON Error
// JSON.parse("{ bad json }") ❌ invalid format

// =========================
// HOW TO FIX ERRORS:
// =========================

// FIX 1: Use correct syntax
console.log("Hello");

// FIX 2: Check variable exists
if (typeof x !== "undefined") {
  console.log(x);
}

// FIX 3: Check type before using methods
const value = "hello";
console.log(value.toUpperCase());

// FIX 4: Use try-catch for risky code
try {
  JSON.parse("{ bad json }");
} catch (err) {
  console.log("Invalid JSON format");
}

// =========================
// SUMMARY:
// =========================
// - error = problem in code execution
// - try-catch helps handle errors safely
// - finally always runs
// - errors happen due to wrong syntax, type, or missing values