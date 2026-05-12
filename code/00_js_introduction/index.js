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

  globalThis.document?.getElementById("output") &&
    (globalThis.document.getElementById("output").textContent = text);
}

addLine("JS Introduction");

addLine("JavaScript can store information, make decisions, and update web pages.");

const language = "JavaScript";

addLine("We are learning " + language + ".");

showOutput();