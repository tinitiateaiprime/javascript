[Course Home](../README.md) | [How to Run](00_how_to_run.md) | [Common Code Words](00_beginner_code_words.md)

# JS Maps

A Map stores key-value pairs. A key points to a value.

## Before You Read the Code
This section comes before the code on purpose. Read these words first, then open `../code/22_js_maps/index.js`.

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
- `new Map()` creates an empty Map.
- `.set(key, value)` stores a value under a key.
- `.get(key)` reads the value for a key.
- `.size` counts pairs.

## How This Lesson Uses the Words
- The file stores student scores in a Map.
- It reads the score for one student.
- It prints the total number of Map entries.

## Files to Open
- Markdown explanation: `md/22_js_maps.md`
- JavaScript code: `code/22_js_maps/index.js`
- Browser page: `code/22_js_maps/index.html`

## Run in the Terminal
```bash
cd code/22_js_maps
node index.js
```

## View in the Browser
```text
Open code/22_js_maps/index.html in VS Code.
Right-click the file.
Choose "Open with Live Preview".
```

## Small Practice
- Add a new student with `scores.set(...)`.
- Read that student's score with `scores.get(...)`.

[Course Home](../README.md)
