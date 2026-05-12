# JavaScript Beginner Course

This folder is organized for a complete beginner. Read the Markdown files first, then run the matching code examples.

## Folder Structure
```text
javascript/
|-- README.md
|-- md/
|   |-- 00_how_to_run.md
|   |-- 00_beginner_code_words.md
|   |-- 06_js_variables.md
|   |-- 07_js_let.md
|   |-- 08_js_const.md
|   |-- ...
|-- code/
|   |-- README.md
|   |-- 06_js_variables/
|   |   |-- index.js
|   |   |-- index.html
|   |-- ...
```

## Start Here
1. Read [How to Run the Examples](md/00_how_to_run.md).
2. Read [Common Code Words Explained](md/00_beginner_code_words.md).
3. Open any lesson [`code/`] 
4. Read the Markdown explanation before opening the JavaScript file.
5. Run the matching `index.js` file with Node.js.


## How to Run Any Lesson Folder
Every lesson inside the `code` folder has this same structure:

```text
code/
|-- lesson_folder_name/
|   |-- index.js
|   |-- index.html
```
/index.js
- `index.js` is the JavaScript file.
- `index.html` is the browser page.
- First run `index.js` in the terminal.
- Then open `index.html` in the browser.

## Run JavaScript Output in Terminal
Use this pattern for any lesson:

```bash
node ./code/folder_name/index.js
```

Example:

```bash
node ./code/00_js_introduction/index.js
```

Another example:

```bash
node ./code/06_js_variables/index.js
```

Important for Git Bash users:

```bash
node ./code/00_js_introduction/index.js
```

Use `/` forward slash. Do not use `.\code\...` in Git Bash.

## Run from Inside a Lesson Folder
You can also go inside one lesson folder and run `index.js`.

Example:

```bash
cd code/00_js_introduction
node index.js
```

To come back to the main `javascript` folder:

```bash
cd ../..
```

## See Output in Browser
Best beginner method:

```text
Open the lesson's index.html file in VS Code.
Right-click the file.
Click "Open with Live Preview".
```

Example file to open:

```text
code/00_js_introduction/index.html
```

If you are using Git Bash on Windows, you can also open the HTML file with this command:

```bash
start code/00_js_introduction/index.html
```

For another lesson, replace the folder name.

Example:

```bash
start code/06_js_variables/index.html
```

## Easy Rule
For any folder inside `code`, use the same folder name in both commands.

Example with `20_js_arrays`:

## This is for terminial output 
```bash
node ./code/20_js_arrays/index.js
```
## This is for browser output 
```bash
start code/20_js_arrays/index.html
```


```
Meaning:

md/00_js_introduction.md
  First read this explanation.

code/00_js_introduction/index.js
  Then run this JavaScript code in terminal.

code/00_js_introduction/index.html
  Then open this in browser to see page output.
```


