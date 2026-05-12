// JavaScript: Sets Concept Tutorial
// ==================================

// SET:
// A Set is a collection of UNIQUE values.
// It does NOT allow duplicate values.

// WHY SETS ARE USED:
// - remove duplicates automatically
// - store unique items only
// - fast checking if value exists

// CREATE SET
const colors = new Set();

// ADD VALUES
colors.add("red");
colors.add("blue");
colors.add("red"); // duplicate will be ignored

// SIZE OF SET (unique values count)
console.log("unique color count:", colors.size);

// CHECK VALUE EXISTS OR NOT
console.log("has blue:", colors.has("blue"));
console.log("has green:", colors.has("green"));

// =========================
// WHERE SETS ARE USED:
// =========================
// - removing duplicate data
// - unique usernames
// - unique emails
// - filtering repeated values

// =========================
// WHERE ERRORS HAPPEN:
// =========================

// 1. Using push instead of add
// colors.push("green"); ❌ ERROR (Set has no push method)

// 2. Using index access (not allowed)
// console.log(colors[0]); ❌ undefined (Set has no index)

// 3. Using Set methods on wrong type
const wrong = [];
// wrong.add("test"); ❌ ERROR (Array has no add method)

// =========================
// HOW TO FIX ERRORS:
// =========================

// FIX 1: Use correct method
colors.add("green"); // ✔ correct

// FIX 2: Convert Set to Array if needed
const colorArray = [...colors];
console.log(colorArray[0]); // ✔ now index works

// FIX 3: Always ensure correct type
if (colors instanceof Set) {
  console.log("This is a valid Set");
}

// =========================
// SUMMARY:
// =========================
// - Set = stores only unique values
// - duplicates are automatically removed
// - use add(), has(), size
// - errors happen when using array methods like push or indexing
// - fix = use correct Set methods or convert to array