/*
  This helper appears in most lessons.
  Read md/00_beginner_code_words.md before changing it.
*/

const lines = [];

function addLine(text) {
  lines.push(text);
}

function showOutput() {
  const text = lines.join("\n");

  console.log(text);

  try {
    const output = document.getElementById("output");

    output.textContent = text;
  } catch (error) {
    console.log(text);
  }
}

addLine("JS How to Run in Browser");
addLine("Open index.html with Live Preview or a browser.");

addLine("Browser mode: JavaScript can update the page using document.");

addLine("CLI mode: Node.js prints the output in the terminal.");

showOutput();