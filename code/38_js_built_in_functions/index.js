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

addLine("JS Built In Functions");

const textNumber = "42";
const numberValue = Number(textNumber);

addLine("Number('42') + 8 = " + (numberValue + 8));
addLine("String(100): " + String(100));
addLine("parseInt('123px'): " + parseInt("123px", 10));

showOutput();
