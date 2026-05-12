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

addLine("JS DOM Navigation");

if (typeof document !== "undefined") {
  const mainElement = document.querySelector("main");

  if (mainElement) {
    addLine("main child count: " + mainElement.children.length);
  }
} else {
  addLine("Open index.html in a browser to navigate the DOM.");
}

showOutput();
