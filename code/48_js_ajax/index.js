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

addLine("JS AJAX");

function fakeAjaxRequest() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve({
        status: "ok",
        lesson: "AJAX"
      });
    }, 200);
  });
}

async function runAjaxLesson() {
  addLine("Requesting data...");
  const response = await fakeAjaxRequest();
  addLine("response status: " + response.status);
  addLine("response lesson: " + response.lesson);
  showOutput();
}

runAjaxLesson();
