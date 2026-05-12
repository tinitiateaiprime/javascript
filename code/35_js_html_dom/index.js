// JavaScript: HTML DOM Concept Tutorial
// =====================================

// DOM (Document Object Model):
// DOM is a way JavaScript interacts with HTML elements in a web page.

// WHY DOM IS USED:
// - to read HTML content
// - to change page content
// - to handle user actions (click, input)
// - to build interactive websites

// =========================
// BASIC EXAMPLE
// =========================

console.log("JS HTML DOM");

// Check if DOM is available (browser only)
if (typeof document !== "undefined") {
  const output = document.getElementById("output");

  console.log("Found output element:", Boolean(output));
} else {
  console.log("Node.js has no DOM. Open in browser.");
}

// =========================
// WHERE DOM IS USED:
// =========================
// - updating text on webpage
// - form validation
// - buttons click actions
// - dynamic UI changes

// =========================
// WHERE ERRORS HAPPEN:
// =========================

// 1. document not available (Node.js)
if (typeof document === "undefined") {
  console.log("❌ DOM not available in Node.js");
}

// 2. element not found
const el = document.getElementById("missing");
console.log(el.textContent); // ❌ ERROR (null reference)

// 3. wrong selector
document.querySelector(".wrong-class"); // returns null

// 4. accessing property of null
const box = document.getElementById("box");
// box.style.color = "red"; ❌ ERROR if box is null

// =========================
// HOW TO FIX ERRORS:
// =========================

// FIX 1: Always check element exists
const safeEl = document.getElementById("output");
if (safeEl) {
  safeEl.textContent = "Hello DOM";
}

// FIX 2: Use correct selectors
document.querySelector("#output"); // correct

// FIX 3: Run code in browser only
console.log("Open index.html in browser");

// FIX 4: Use safe checks
const btn = document.getElementById("btn");
if (btn) {
  btn.style.color = "blue";
}

// =========================
// SUMMARY:
// =========================
// - DOM = JavaScript way to control HTML
// - used for interactive web pages
// - errors happen when elements are missing or code runs outside browser
// - fix = check element + run in browser + correct selectors