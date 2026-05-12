// JavaScript: Loops Tutorial
// ==========================

// LOOPS:
// Loops are used to repeat a block of code multiple times.

// WHY LOOPS ARE USED:
// - Avoid repeating same code
// - Automate repeated tasks
// - Work with numbers and lists

// =========================
// 1. FOR LOOP (CORRECT)
// =========================

for (let i = 1; i <= 3; i++) {
  console.log("Correct for loop:", i);
}

// HOW IT WORKS:
// start → i = 1
// condition → i <= 3
// step → i++ (increase by 1)

// =========================
// FOR LOOP (ERROR EXAMPLE)
// =========================

// for (let i = 1; i <= 3; i--) {
//   console.log("Wrong loop");
// }

// ERROR:
// ❌ infinite loop or wrong direction
// because i-- decreases value but condition expects increase

// =========================
// 2. WHILE LOOP (CORRECT)
// =========================

let count = 3;

while (count > 0) {
  console.log("Correct while loop:", count);
  count = count - 1;
}

// HOW IT WORKS:
// checks condition first → count > 0
// runs code
// decreases value

// =========================
// WHILE LOOP (ERROR EXAMPLE)
// =========================

// let x = 3;

// while (x > 0) {
//   console.log("Wrong while loop:", x);
// }

// ERROR:
// ❌ infinite loop
// because x is never changed (no decrement)

// =========================
// COMMON LOOP ERRORS
// =========================

// 1. Infinite loop
// while (true) {
//   console.log("never stops"); ❌ freezes program
// }

// 2. Missing increment/decrement
// for (let i = 0; i < 5;) ❌ no update

// 3. Wrong condition
// while (count = 3) ❌ assignment instead of comparison

// =========================
// SUMMARY:
// =========================
// - loops repeat code
// - for = fixed number of times
// - while = condition based
// - always update variable to avoid errors