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

addLine("JS Typed Arrays");

const bytes = new Uint8Array([65, 66, 67]);
bytes[1] = 90;

addLine("first byte: " + bytes[0]);
addLine("all bytes: " + Array.from(bytes).join(", "));

showOutput();
