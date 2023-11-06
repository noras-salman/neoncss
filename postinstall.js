const fs = require("fs");

fs.rmdirSync("./docs", { recursive: true });
fs.rmdirSync("./release", { recursive: true });
fs.rmdirSync("./src", { recursive: true });

const path = "./";
let regex = /\.(html|md)/g;

fs.readdirSync(path)
  .filter((f) => regex.test(f))
  .map((f) => fs.unlinkSync(path + f));

fs.unlinkSync("./server.js");
fs.unlinkSync("./gulpfile.js");
