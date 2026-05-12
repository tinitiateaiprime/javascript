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

addLine("JS JSON");

const student = {
  name: "Asha",
  score: 95
};

const jsonText = JSON.stringify(student);
const parsedStudent = JSON.parse(jsonText);

addLine("JSON text: " + jsonText);
addLine("parsed name: " + parsedStudent.name);

showOutput();
