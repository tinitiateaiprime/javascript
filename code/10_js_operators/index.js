// JavaScript: Operators Tutorial
// ==============================

// OPERATORS:
// Operators are symbols used to perform actions on values or variables.

// Example values
const a = 12;
const b = 5;

// 1. Arithmetic Operators

// + (Addition)
console.log("a + b =", a + b);

// - (Subtraction)
console.log("a - b =", a - b);

// * (Multiplication)
console.log("a * b =", a * b);

// / (Division)
console.log("a / b =", a / b);

// % (Modulus - remainder)
console.log("a % b =", a % b);


  // 2. Comparison Operators
  // They return true or false


// > (greater than)
console.log("a > b =", a > b);

// < (less than)
console.log("a < b =", a < b);

// >= (greater or equal)
console.log("a >= b =", a >= b);

// <= (less or equal)
console.log("a <= b =", a <= b);

// == (equal check)
console.log("a == b =", a == b);

// === (strict equal check)
console.log("a === b =", a === b);

// 3. Logical Operators


// AND (&&) → both must be true
const age = 20;
const hasLicense = true;

const canDrive = age >= 18 && hasLicense;

console.log("canDrive:", canDrive);

// OR (||) → any one true is enough
console.log(true || false);

// NOT (!) → reverses value
console.log(!true);

//  WHERE ERRORS HAPPEN IN OPERATORS:

// 1. Using wrong variable

// console.log(x + y); ❌ ReferenceError (x, y not defined)

// 2. Using string instead of number


console.log("10" + 5); // "105" (not error, but unexpected result)

  
// 3. Missing brackets in complex operations

console.log(10 + 5 * 2); // multiplication happens first

// Correct grouping
console.log((10 + 5) * 2);

/*
  SUMMARY:
  - Operators perform actions on values
  - Arithmetic → math
  - Comparison → true/false
  - Logical → conditions
*/