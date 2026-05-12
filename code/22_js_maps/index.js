// JavaScript: Maps Concept Tutorial
// ==================================

// MAP:
// A Map is used to store data in KEY - VALUE pairs.
// It is similar to an object but more powerful.

// WHY MAPS ARE USED:
// - store key-value data
// - keys can be ANY type (string, number, object)
// - easy to add, get, delete values

// CREATE MAP
const scores = new Map();

// ADD VALUES (key -> value)
scores.set("Asha", 90);
scores.set("Ravi", 84);

// GET VALUE USING KEY
console.log("Asha score:", scores.get("Asha"));

// SIZE OF MAP
console.log("number of scores:", scores.size);

// CHECK KEY EXISTS
console.log("has Ravi:", scores.has("Ravi"));

// =========================
// WHERE MAPS ARE USED:
// =========================
// - student marks
// - user data storage
// - caching data
// - dictionary style data

// =========================
// WHERE ERRORS HAPPEN:
// =========================

// 1. Using wrong method name
// scores.add("Asha", 90); ❌ ERROR (Map has no add method)

// 2. Using [] like object
// console.log(scores["Asha"]); ❌ undefined (wrong usage)

// 3. Using get with wrong key
console.log(scores.get("Unknown")); // undefined (not error, but no value)

// 4. Using Map methods on wrong type
const wrong = {};
// wrong.set("a", 1); ❌ ERROR (object has no set method)

// =========================
// HOW TO FIX ERRORS:
// =========================

// FIX 1: Always use set() for adding
scores.set("NewUser", 100);

// FIX 2: Always use get() for reading
console.log(scores.get("Asha"));

// FIX 3: Ensure correct type before using Map methods
if (scores instanceof Map) {
  console.log("Valid Map");
}

// FIX 4: Convert Map to object or array if needed
const obj = Object.fromEntries(scores);
console.log(obj);

// =========================
// SUMMARY:
// =========================
// - Map = key-value storage system
// - use set() to add data
// - use get() to read data
// - more flexible than objects
// - errors happen when using object/array methods on Map
// - fix = use correct Map methods (set, get, has)