// JavaScript: const Concept Tutorial
// ==================================

// const means a variable whose value CANNOT be changed after it is assigned.

// We use const when we want a fixed value that should stay same throughout the program.
// Example: name, country, ID, configuration values, etc.

const courseName = "JavaScript";

console.log(courseName);

// RULE:
// const value cannot be changed later.
// If you try to change it, JavaScript will throw an ERROR.

// Example of number with const

const totalStudents = 50;

console.log(totalStudents);

// Example of string with const

const teacherName = "Eswar";

console.log(teacherName);

// const is useful when value should stay fixed.

const version = "1.0";

console.log(version);

// WHERE const GIVES ERROR:

// 1. When you try to reassign a value
// courseName = "Python"; ❌ ERROR: Assignment to constant variable

// 2. When you try to declare same const again
// const courseName = "Python"; ❌ ERROR: Identifier already declared

// SUMMARY:
// - const = fixed value
// - cannot change once assigned
// - will throw error if you try to modify it

const city = "Hyderabad";
const country = "India";

console.log(city);
console.log(country);

console.log("JS Const Example Completed");