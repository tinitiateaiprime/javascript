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

  if (typeof document !== "undefined") {
    const output = document.getElementById("output");

    if (output) {
      output.textContent = text;
    }
  }
}

addLine("JS Events");
addLine("Click the button in the browser to add one event message.");

if (typeof document !== "undefined") {
  const button = document.getElementById("action");

  if (button) {
    button.addEventListener("click", function () {
      addLine("Button click event happened.");
      showOutput();
    });
  }
} else {
  addLine("In CLI mode, there is no button to click.");
}

showOutput();
