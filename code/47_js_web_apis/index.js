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

addLine("JS Web APIs");

const pageUrl = new URL("https://example.com/course?topic=javascript");

addLine("hostname: " + pageUrl.hostname);
addLine("topic: " + pageUrl.searchParams.get("topic"));

if (typeof navigator !== "undefined") {
  addLine("browser language: " + navigator.language);
} else {
  addLine("navigator is a browser-only API in this lesson.");
}

showOutput();
