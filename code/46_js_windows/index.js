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

addLine("JS Windows");

if (typeof window !== "undefined") {
  addLine("window width: " + window.innerWidth);
  addLine("page address starts with: " + window.location.href.slice(0, 30));
} else {
  addLine("Node.js has no browser window object.");
}

showOutput();
