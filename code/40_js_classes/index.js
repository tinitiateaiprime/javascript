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

addLine("JS Classes");

class Student {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return "Hello, " + this.name + "!";
  }
}

const student = new Student("Asha");

addLine(student.greet());

showOutput();
