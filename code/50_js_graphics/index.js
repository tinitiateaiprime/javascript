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

addLine("JS Graphics");

if (typeof document !== "undefined") {
  const canvas = document.getElementById("drawing");

  if (canvas) {
    const context = canvas.getContext("2d");

    if (context) {
      context.fillStyle = "#2563eb";
      context.fillRect(20, 20, 120, 80);
      context.fillStyle = "#111827";
      context.font = "18px Arial";
      context.fillText("Canvas", 20, 130);
      addLine("A rectangle was drawn on the canvas.");
    }
  }
} else {
  addLine("Open index.html in a browser to see the canvas drawing.");
}

showOutput();
