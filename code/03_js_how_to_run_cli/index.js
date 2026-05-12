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
    console.log("Running in CLI mode");
  }
}

addLine("JS How to Run in CLI");
addLine("Step 1: Open a terminal.");
addLine("Step 2: Move into this lesson folder.");
addLine("Step 3: Run node index.js.");

showOutput();