[Course Home](../README.md) | [How to Run](00_how_to_run.md) | [Common Code Words](00_beginner_code_words.md)

# JS Console Output

Output means showing information. In this lesson, output appears in the terminal and the browser console.

## Before You Read the Code

Read these words first, then open `../code/01_js_console.log/index.js`.

- `//` is a comment. JavaScript ignores comments when the file runs.
- A semicolon `;` usually ends one JavaScript instruction.
- Parentheses `()` hold function inputs.
- `console.log(...)` prints information in the terminal or browser console.
- `console.warn(...)` prints a warning message.
- `console.error(...)` prints an error message.

## Important Words in This Lesson

- `console.log(...)`
  Prints values directly to the terminal or browser console.

- `console.warn(...)`
  Shows warning messages.

- `console.error(...)`
  Shows error messages.

## How This Lesson Uses the Words

- The file prints text with `console.log(...)`.
- The file prints numbers with `console.log(...)`.
- The file prints multiple values in one line.
- The file shows warning messages.
- The file shows error messages.

## Example Code

### Print Text

```js
console.log("Hello World");
```

### Print Numbers

```js
console.log(100);
console.log(10 + 20);
console.log(5 * 2);
```

### Print Multiple Values

```js
console.log("Age:", 22);
```

### Print Warning Messages

```js
console.warn("This is warning");
```

### Print Error Messages

```js
console.error("Something went wrong");
```

## Files to Open

- Markdown explanation:
  `md/01_js_console_output.md`

- JavaScript code:
  `code/01_js_console.log/index.js`

- Browser page:
  `code/01_js_console.log/index.html`

## Run in the Terminal

```bash
cd code/01_js_console.log
node index.js
```

## View in the Browser

```text
Open code/01_js_console.log/index.html in VS Code.
Right-click the file.
Choose "Open with Live Preview".
```

## Browser Console

```text
Right-click the browser page.
Click "Inspect".
Open the "Console" tab.
```

## Small Practice

- Change the `"Hello World"` text.
- Add another `console.log(...)` line.
- Print your own age.
- Add your own warning message.
- Add your own error message.

[Course Home](../README.md)