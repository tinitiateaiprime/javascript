// JavaScript: Temporal Concept Tutorial
// ======================================

// TEMPORAL:
// Temporal is a modern JavaScript API used to handle dates and time
// in a better and more accurate way than the old Date object.

// WHY TEMPORAL IS USED:
// - better date/time handling
// - avoids confusion in months, timezones
// - more precise time calculations

// IMPORTANT:
// Temporal is NOT fully supported in all browsers yet.
// So sometimes we use Date as fallback.

// =========================
// USING TEMPORAL (SAFE CHECK)
// =========================

if (typeof Temporal !== "undefined" && Temporal.Now) {
  const today = Temporal.Now.plainDateISO();

  console.log("Temporal date:", today.toString());
} else {
  const today = new Date();

  console.log("Temporal not available, using Date fallback");
  console.log("Fallback date:", today.toISOString().slice(0, 10));
}

// =========================
// WHERE TEMPORAL IS USED:
// =========================
// - advanced date systems
// - calendar apps
// - scheduling systems
// - time zone calculations

// =========================
// WHERE ERRORS COME:
// =========================

// 1. Temporal not defined
// Temporal.Now.plainDateISO() ❌ ReferenceError

// WHY?
// Because browser does not support Temporal yet

// 2. Using Temporal without checking
// const today = Temporal.Now.plainDateISO(); ❌ crashes app

// =========================
// HOW TO FIX ERRORS:
// =========================

// FIX 1: Always check before using Temporal
if (typeof Temporal !== "undefined") {
  console.log(Temporal.Now.plainDateISO());
}

// FIX 2: Use fallback Date object
const safeDate = new Date();
console.log(safeDate.toISOString());

// FIX 3: Use conditional logic (BEST PRACTICE)
const todaySafe =
  typeof Temporal !== "undefined"
    ? Temporal.Now.plainDateISO().toString()
    : new Date().toISOString().slice(0, 10);

console.log("Safe date:", todaySafe);

// =========================
// SUMMARY:
// =========================
// - Temporal = modern date/time system
// - better than Date but not fully supported everywhere
// - error happens when Temporal is not available
// - fix = check before use OR use Date fallback