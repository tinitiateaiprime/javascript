[Course Home](../README.md) | [How to Run](00_how_to_run.md) | [Common Code Words](00_beginner_code_words.md)

# JS Introduction

JavaScript is a programming language. It can store information, make decisions, repeat work, and change web pages.

## Why This Page Uses CSS Style
The browser shows this lesson inside a web page. The CSS style in `code/00_js_introduction/index.html` is the part that makes the page look clean and easy to read.

- The `<style>` block is placed inside the `<head>` of the HTML page. That means the browser reads the page layout and colors before it shows the content.
- We use this style in each lesson page so every example looks similar. That helps beginners focus on learning JavaScript without being distracted by different page designs.
- It is easier for a beginner when the daily lesson page has a soft background, one clear content box, and readable text.

### What the important style parts do
- `body` sets the background color, the text color, the font, and the space around the page.
- `main` keeps the lesson area from becoming too wide and centers it on the screen.
- `a` sets the color for links so they are easy to see.
- `.lesson-panel` makes the lesson text inside a white card with a border and some padding.
- `button` makes clickable buttons look like buttons instead of plain text.
- `pre` styles the code/output box so the text is easy to read and it can scroll if needed.
- `canvas` styles any drawing area with a border and white background.

## Before You Read the Code
This section comes before the code on purpose. Read these words first, then open `../code/00_js_introduction/index.js`.

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
- - `globalThis.document?.getElementById("output")` safely checks for the browser document object.  
  `document` exists in browsers but not in Node.js.  
  `?.` is called optional chaining. It prevents errors if `document` does not exist.
  
- `document.getElementById("output")` finds the HTML element with `id="output"` when the file is opened in a browser.
- `output.textContent = text` puts text on the web page.

## Important Words in This Lesson
- `language` is a variable that stores the text `JavaScript`.
- `+` joins text together when both sides are strings.
- `showOutput()` prints the final result.

## How This Lesson Uses the Words
- The file first creates the shared `lines` array.
- It stores the lesson name and a short message.
- It joins text with `+` so the output reads like a sentence.
- It calls `showOutput()` at the end so you can see the result.

## Files to Open
- Markdown explanation: `md/00_js_introduction.md`
- JavaScript code: `code/00_js_introduction/index.js`
- Browser page: `code/00_js_introduction/index.html`

## Run in the Terminal
```bash
cd code/00_js_introduction
node index.js
```

## View in the Browser
```text
Open code/00_js_introduction/index.html in VS Code.
Right-click the file.
Choose "Open with Live Preview".
```

## Small Practice
- Change `JavaScript` to your own name and run the file again.
- Add one more `addLine(...)` message before `showOutput()`.

[Course Home](../README.md)
