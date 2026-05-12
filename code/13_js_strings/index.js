// JavaScript: Strings Tutorial
// ============================

// STRING:
// A string is a type of data used to store TEXT.
// Text must be written inside quotes (" " or ' ' or ` `).

// WHY STRINGS ARE USED:
// - names
// - messages
// - text data
// - sentences

const message = "JavaScript";

// Print string
console.log("message:", message);

// STRING PROPERTIES AND METHODS:

// length → number of characters in string
console.log("length:", message.length);

// toUpperCase → converts text to uppercase
console.log("uppercase:", message.toUpperCase());

// includes → checks if text exists inside string
console.log("includes Script:", message.includes("Script"));

// =========================
// STRING USAGE EXAMPLES
// =========================

const name = "Eswar";

console.log("Hello " + name);

const city = "Vijayawada";

console.log("City:", city);

// =========================
// STRING ERRORS
// =========================

// 1. Missing quotes ❌
// const text = JavaScript;

// ERROR: ReferenceError (JavaScript treated as variable)

// 2. Mixing quotes incorrectly ❌
// const msg = "Hello 'World"; // not closed properly

// 3. Using string methods on undefined ❌
// let x;
// console.log(x.length); // ERROR: cannot read property

// =========================
// SUMMARY:
// =========================
// - string = text data
// - always inside quotes
// - used for names, messages, sentences
// - has methods like length, toUpperCase, includes