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

  const output = document.getElementById("output");

  output.textContent = text;
}

addLine("JS Syntax");

const topic = "syntax";

let sentence = "Good syntax means JavaScript can understand your code.";

sentence = sentence + " Each statement is written clearly.";

addLine(topic + ": " + sentence);

showOutput();
