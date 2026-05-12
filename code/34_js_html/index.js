// JavaScript + HTML Concept Tutorial
// ==================================

// HTML:
// HTML (HyperText Markup Language) is used to create the structure of a web page.

// WHY HTML IS USED:
// - creates page layout
// - shows text, buttons, images
// - gives elements for JavaScript to work with

// HOW JAVASCRIPT USES HTML:
// JavaScript can read and change HTML elements using DOM (Document Object Model).

// =========================
// BASIC EXAMPLE
// =========================

console.log("JS HTML");
console.log("HTML gives structure to the page");

// =========================
// ACCESSING HTML ELEMENTS
// =========================

// This works only in browser
if (typeof document !== "undefined") {
  const heading = document.querySelector("h1");

  if (heading) {
    console.log("h1 text:", heading.textContent);
  }
} else {
  console.log("Run this in browser to access HTML");
}

// =========================
// WHERE HTML + JS IS USED:
// =========================
// - web pages
// - forms (login, signup)
// - dashboards
// - interactive UI

// =========================
// WHERE ERRORS HAPPEN:
// =========================

// 1. document not defined (Node.js)
if (typeof document !== "undefined") {
  // safe
}

// 2. element not found
const btn = document.getElementById("btn");
console.log(btn.textContent); // ❌ ERROR if btn is null

// 3. wrong selector
document.querySelector(".wrongClass"); // returns null

// 4. accessing property of null
const el = document.getElementById("noElement");
// el.textContent ❌ ERROR

// =========================
// HOW TO FIX ERRORS:
// =========================

// FIX 1: Always check element exists
const el = document.getElementById("heading");
if (el) {
  console.log(el.textContent);
}

// FIX 2: Use correct selector
document.querySelector("h1"); // correct

// FIX 3: Run code in browser (not Node)
console.log("Open index.html in browser");

// FIX 4: Use safe checking
const button = document.getElementById("btn");
if (button) {
  button.textContent = "Clicked";
}

// =========================
// SUMMARY:
// =========================
// - HTML = structure of web page
// - JS reads and changes HTML using DOM
// - errors happen when element is missing or code runs outside browser
// - fix = check element + run in browser