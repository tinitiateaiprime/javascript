// JavaScript: Objects Concept Tutorial
// =====================================

// OBJECT:
// An object is used to store multiple related values in key-value pairs.

// WHY OBJECTS ARE USED:
// - store real world data (student, user, product)
// - organize data in structured way
// - easy to access values using keys

// =========================
// EXAMPLE 1: OBJECT
// =========================

const student = {
  name: "Asha",
  age: 20,
  isEnrolled: true
};

// Access object values
console.log("name:", student.name);
console.log("age:", student.age);
console.log("isEnrolled:", student.isEnrolled);

// Add new property
student.city = "Hyderabad";

console.log("city:", student.city);

// =========================
// EXAMPLE 2: PRODUCT OBJECT
// =========================

const product = {
  name: "Laptop",
  price: 50000,
  brand: "Dell"
};

console.log("product name:", product.name);
console.log("price:", product.price);
console.log("brand:", product.brand);

// =========================
// WHERE OBJECTS ARE USED:
// =========================
// - user profiles (name, email, age)
// - products (price, brand, id)
// - student records
// - API data (real-world applications)

// =========================
// WHERE ERRORS HAPPEN:
// =========================

// 1. Accessing wrong property
console.log(student.salary); // undefined (no error, but no value)

// 2. Object not defined
// console.log(user.name); ❌ ReferenceError

// 3. Using object before creation
// console.log(car.model); ❌ ReferenceError

// 4. Wrong spelling of key
console.log(student.nmae); // undefined

// =========================
// SUMMARY:
// =========================
// - object = collection of key-value pairs
// - used for real-world structured data
// - errors happen when object or key is wrong or undefined