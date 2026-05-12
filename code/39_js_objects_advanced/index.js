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

addLine("JS Objects Advanced");

const student = {
  firstName: "Asha",
  lastName: "Rao",
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
};

const studentWithCity = Object.assign({}, student, { city: "Hyderabad" });

addLine("fullName: " + student.fullName);
addLine("city: " + studentWithCity.city);

showOutput();
