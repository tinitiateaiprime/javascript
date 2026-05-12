// JavaScript: Numbers Concept Tutorial
// =====================================

// NUMBER:
// Number is a data type used to store numeric values.
// Example: 10, 25, 19.99, 100

// WHERE NUMBERS ARE USED:
// - shopping bills
// - counting items
// - age, marks, salary
// - measurements (money, distance, weight)

// Example 1: Price calculation
const price = 19.99;
const quantity = 3;

// multiplication (real-world calculation)
const total = price * quantity;

console.log("price:", price);
console.log("quantity:", quantity);
console.log("total:", total.toFixed(2));

// Example 2: Simple math
const a = 10;
const b = 5;

console.log("sum:", a + b);
console.log("sub:", a - b);
console.log("mul:", a * b);
console.log("div:", a / b);

// WHERE ERRORS HAPPEN IN NUMBERS:

// 1. String instead of number (wrong result)
console.log("10" + 5); // "105" (not 15)

// 2. Undefined variable
// console.log(x + 10); ❌ ReferenceError

// 3. Wrong operation on wrong type
// console.log("hello" * 2); ❌ NaN (Not a Number)

// SUMMARY:
// - numbers are used for calculations
// - used in real-life values like money and quantity
// - errors happen when wrong type or undefined values used