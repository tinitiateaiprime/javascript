[Course Home](../README.md) | [How to Run](00_how_to_run.md) | [Common Code Words](00_beginner_code_words.md)

# JS HTML DOM

The DOM is the browser's object version of the HTML page.

## Before You Read the Code
This section comes before the code on purpose. Read these words first, then open `../code/35_js_html_dom/index.js`.

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
- DOM means Document Object Model.
- `document.getElementById(...)` finds one element by id.
- `Boolean(output)` turns the result into true or false.

## How This Lesson Uses the Words
- The file checks whether it is running in a browser.
- It looks for the `output` element.
- It prints whether the element was found.

## Files to Open
- Markdown explanation: `md/35_js_html_dom.md`
- JavaScript code: `code/35_js_html_dom/index.js`
- Browser page: `code/35_js_html_dom/index.html`

## Run in the Terminal
```bash
cd code/35_js_html_dom
node index.js
```

## View in the Browser
```text
Open code/35_js_html_dom/index.html in VS Code.
Right-click the file.
Choose "Open with Live Preview".
```

## Small Practice
- Change `id="output"` in the HTML, refresh, and see what happens.
- Put the id back when finished.

[Course Home](../README.md)
