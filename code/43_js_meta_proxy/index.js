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

addLine("JS Meta and Proxy");

const target = {
  name: "Asha"
};

const student = new Proxy(target, {
  get: function (object, property) {
    if (property in object) {
      return object[property];
    }

    return "Not found";
  }
});

addLine("student.name: " + student.name);
addLine("student.age: " + student.age);

showOutput();
