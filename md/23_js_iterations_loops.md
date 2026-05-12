[Course Home](../README.md) | [How to Run](00_how_to_run.md) | [Common Code Words](00_beginner_code_words.md)

# JS Iterations - Loops

Iteration means going through values one by one.

## Before You Read the Code
This section comes before the code on purpose. Read these words first, then open `../code/23_js_iterations_loops/index.js`.

- `/* ... */` and `//` are comments. Comments are notes for humans, and JavaScript ignores them when the file runs.
- A semicolon `;` usually ends one JavaScript instruction.
- Parentheses `()` hold function inputs or conditions. Curly braces `{ ... }` hold a block of code.
- `=` stores the value on the right inside the variable name on the left.
- `const` creates a variable name that cannot be reassigned to a different value. This course uses `const` when the name should stay connected to the same value.
- `let` creates a variable name whose value can change later. Use `let` for counters, scores, totals, and other values that update.
- `var` is the older way to create variables. You will see it in old code, but modern beginner code should usually use `const` or `let`.
- `const lines = []` creates one array named `lines`. The name `lines` stays the same, so `const` is correct. The array contents can still grow when the code uses `lines.push(...)`.
- `[]` means an array. An array is a list that can hold many values in order.
- `function addLine(text) { ... }` creates a reusable block of code. The word `text` is a parameter, which means a value you give to the function.
- `console.log(...)` prints a value in the terminal or browser console.
- `if (typeof document !== "undefined")` checks whether the code is running in a browser. Node.js does not have `document`, so this check prevents errors.
- `document.getElementById("output")` finds the HTML element with `id="output"` when the file is opened in a browser.
- `output.textContent = text` puts text on the web page.

## Important Words in This Lesson
- `for...of` is useful for array values.
- `for...in` is useful for object property names.
- `const tool of tools` means each array value is called `tool` during one loop repeat.

## How This Lesson Uses the Words
- The file loops through an array with `for...of`.
- It loops through object keys with `for...in`.
- It uses each key to read the matching object value.

## Files to Open
- Markdown explanation: `md/23_js_iterations_loops.md`
- JavaScript code: `code/23_js_iterations_loops/index.js`
- Browser page: `code/23_js_iterations_loops/index.html`

## Run in the Terminal
```bash
cd code/23_js_iterations_loops
node index.js
```

## View in the Browser
```text
Open code/23_js_iterations_loops/index.html in VS Code.
Right-click the file.
Choose "Open with Live Preview".
```

## Small Practice
- Add one more tool to the array.
- Add one more property to the student object.

[Course Home](../README.md)
