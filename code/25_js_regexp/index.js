// JavaScript: RegExp (Regular Expression) Concept Tutorial
// =========================================================

// REGEXP:
// RegExp (Regular Expression) is used to search, match, and
// validate patterns in text.

// WHY REGEXP IS USED:
// - find numbers in text
// - validate email, phone numbers
// - search patterns in strings
// - data cleaning

// =========================
// BASIC EXAMPLE
// =========================

const orderText = "Order 123 is ready";

// \d+ means: one or more digits (0-9)
const digitsPattern = /\d+/;

// check if pattern exists
console.log("contains digits:", digitsPattern.test(orderText));

// get matched value
const match = orderText.match(digitsPattern);

if (match) {
  console.log("first number:", match[0]);
}

// =========================
// WHERE REGEXP IS USED:
// =========================
// - form validation (email, phone)
// - extracting numbers from text
// - search filters
// - input validation systems

// =========================
// WHERE ERRORS HAPPEN:
// =========================

// 1. Wrong pattern syntax
// const pattern = /d+/ ❌ ERROR (missing \)

// 2. Using string methods incorrectly
const text = "hello";
// text.test(/\d+/); ❌ ERROR (test is not string method)

// 3. match on undefined
let data;
console.log(data.match(/\d+/)); 
//  ❌ ERROR

// 4. Wrong RegExp usage
const wrong = "abc";
// wrong.test(/\d+/); ❌ ERROR (test is not string method)

// =========================
// HOW TO FIX ERRORS:
// =========================

// FIX 1: Always use correct RegExp syntax
const safePattern = /\d+/;

// FIX 2: Use test() on RegExp, not string
console.log(safePattern.test("Order 123"));

// FIX 3: Use match() on string
console.log("Order 123".match(/\d+/));

// FIX 4: Check value before using
const safeText = "Order 123";
if (safeText) {
  console.log(safeText.match(/\d+/));
}

// =========================
// SUMMARY:
// =========================
// - RegExp = pattern matching tool for text
// - used for searching, validation, extraction
// - errors happen due to wrong syntax or wrong method usage
// - fix = use correct pattern + correct method (test/match)