// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console.
// You can use the fs library to as a black box, the goal is to understand async tasks.
// Try to do an expensive operation below the file read and see how it affects the output.
// Make the expensive operation more and more expensive and see how it affects the output.
const fs = require("node:fs");

function createReadPromise(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf-8", (err, data) => {
      resolve(data);
    });
  });
}

function createWritePromise() {
  return new Promise((re, rej) => {
    fs.writeFile(
      "new.txt",
      "hello i am new file created by Achyut Vardhan on 31-12-2023",
      (err, data) => {
        re(data);
      }
    );
  });
}
const callback = async () => {
  const result = await createReadPromise("a.txt");
  console.log(result);
  const result2 = await createWritePromise();
  console.log(await createReadPromise("new.txt"));
};
callback();


console.log("hello world");
