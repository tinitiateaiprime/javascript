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

addLine("JS Advanced");

function createCounter() {
  let count = 0;

  return function () {
    count = count + 1;
    return count;
  };
}

const nextCount = createCounter();

addLine("first call: " + nextCount());
addLine("second call: " + nextCount());

showOutput();
