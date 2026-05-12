[Course Home](../README.md)

# Common Code Words Explained

Read this file before editing the JavaScript examples. These words appear in many lessons.

## Comments
Comments are notes for humans. JavaScript ignores comments when the file runs.

- `//` starts a comment that lasts for one line.
- `/* ... */` creates a comment that can cover more than one line.

The examples use comments at the top of each file to remind you where the beginner explanation lives.

## Semicolon `;`
A semicolon usually ends one JavaScript instruction.

The examples use semicolons to make statement endings clear for beginners.

## Parentheses `()` and Curly Braces `{ ... }`
Parentheses hold function inputs or conditions.

Curly braces hold a block of code, such as the inside of a function or an `if` statement.

## Equals Sign `=`
The equals sign stores the value on the right inside the variable name on the left.

Example idea: `let score = 10` stores `10` inside `score`.

## `const`
`const` creates a variable name that cannot be reassigned to a different value.

Use `const` when the name should keep pointing to the same value.

Example from the lessons: `const lines = []`.

Why `const` is used there:
- The name `lines` should keep pointing to the same array.
- The array can still receive new items with `lines.push(...)`.
- Reassigning `lines` to a totally different value would make the code harder for beginners to follow.

## `let`
`let` creates a variable whose value can change later.

Use `let` for counters, totals, scores, and values that update.

Example idea: `let score = 10`, then later `score = score + 5`.

## `var`
`var` is the older way to create variables.

Beginner rule:
- Learn what `var` looks like because older code uses it.
- Prefer `const` first.
- Use `let` when the value must change.
- Avoid `var` in new beginner code.

## `const lines = []`
This line has four parts:
- `const`: the variable name should not be reassigned.
- `lines`: the variable name.
- `=`: stores the value on the right into the name on the left.
- `[]`: creates an empty array, which means an empty list.

The lessons then use `lines.push("some text")` to add messages to that list.

## Strings
A string is text inside quotes.

Examples: `"JavaScript"`, `"Hello"`, and `"Asha"`.

## Numbers
Numbers are values used for math.

Examples: `10`, `42`, and `19.99`.

## Booleans
A boolean is either `true` or `false`.

## Arrays
An array is an ordered list.

Example: `["HTML", "CSS", "JavaScript"]`.

## Objects
An object groups related values by name.

Example idea: a student object can have a name, age, and course.

## Functions
A function is a reusable block of code.

In these lessons, `function addLine(text) { ... }` adds one message to the output list.

## `console.log(...)`
`console.log(...)` prints information in the terminal or browser console.

## `document`
`document` exists in a browser. It represents the web page.

Node.js does not have `document`, so the examples check for it before using browser-only code.

## `if (typeof document !== "undefined")`
This condition prevents errors.

It means: "Only run this browser code if `document` exists."

## `showOutput()`
`showOutput()` is a helper function used by the examples.

It joins all lines into one text block, prints the text in the terminal, and also writes it to the browser page when possible.

[Course Home](../README.md)
