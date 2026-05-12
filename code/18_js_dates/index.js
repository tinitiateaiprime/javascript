// JavaScript: Dates Concept Tutorial
// ===================================

// DATE:
// Date is used to work with time and date in JavaScript.
// It helps to get current date, time, year, month, etc.

// WHY DATES ARE USED:
// - show current time
// - show date in apps
// - timers and scheduling
// - logs and tracking events

// CREATE CURRENT DATE OBJECT
const now = new Date();

// PRINT FULL DATE OBJECT
console.log(now);

// GET YEAR
console.log("year:", now.getFullYear());

// GET MONTH (IMPORTANT NOTE)
// Month starts from 0 (January = 0, December = 11)
console.log("month:", now.getMonth());

// GET DAY
console.log("day:", now.getDate());

// GET FULL ISO FORMAT DATE
console.log("ISO:", now.toISOString());

// =========================
// WHERE DATES ARE USED:
// =========================
// - login timestamps
// - booking systems
// - calendars
// - reminders
// - event tracking

// =========================
// WHERE ERRORS HAPPEN:
// =========================

// 1. Wrong method name
// now.getYear() ❌ old and incorrect usage (gives wrong result)

// 2. Undefined date object
// console.log(date.getFullYear()) ❌ ReferenceError (date not defined)

// 3. Calling methods on wrong type
const wrong = "2025-01-01";
// wrong.getFullYear() ❌ ERROR (string has no date methods)

// =========================
// HOW TO FIX ERRORS:
// =========================

// FIX 1: Always create Date object first
const safeDate = new Date();
console.log(safeDate.getFullYear());

// FIX 2: Convert string to Date
const dateString = "2025-01-01";
const convertedDate = new Date(dateString);

console.log(convertedDate.getFullYear());

// FIX 3: Use correct methods only
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());

// =========================
// SUMMARY:
// =========================
// - Date is used to handle time and calendar
// - new Date() creates current date
// - errors happen when object is not Date type or not defined
// - fix by using proper Date object and correct methods