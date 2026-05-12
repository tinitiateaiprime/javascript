// JavaScript: If Conditions Tutorial
// ===================================

// IF CONDITIONS:
// "if" is used to check a condition and run code only when condition is true.

// It helps in decision making in programming.

// Example value
const marks = 82;

let grade;


// IF CONDITION FLOW:
// if → checks first condition
//  else if → checks another condition if first is false
// else → runs when all conditions are false


// CONDITION 1
if (marks >= 90) {
  grade = "Grade A";
}

// CONDITION 2
else if (marks >= 75) {
  grade = "Grade B";
}

// DEFAULT CONDITION
else {
  grade = "Keep practicing";
}

// Print results
console.log("marks:", marks);
console.log("grade:", grade);

/*
  WHERE IF CONDITIONS ARE USED:
  - login check (user valid or not)
  - age check (eligible or not)
  - marks grading system
  - permissions (allowed or not)
*/

//  WHERE ERRORS HAPPEN:
// 1. Missing condition brackets
// if marks >= 90 ❌ ERROR


//  2. Wrong comparison operator

if (marks = 90) {
  // ❌ wrong (assignment instead of comparison)
}

//  Correct is:
// if (marks === 90)

// 3. Undefined variable
// if (score > 50) ❌ ReferenceError if score not defined


/*
  SUMMARY:
  - if = condition check
  - else if = extra condition
  - else = default case
  - always returns based on true/false
*/