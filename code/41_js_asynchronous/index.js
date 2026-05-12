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

addLine("JS Asynchronous");

function wait(milliseconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, milliseconds);
  });
}

async function runAsyncLesson() {
  addLine("Starting async work...");
  await wait(200);
  addLine("Finished after waiting.");
  showOutput();
}

runAsyncLesson();
