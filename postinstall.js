const fs = require("fs");

fs.rmdirSync("./docs", { recursive: true });
fs.rmdirSync("./release", { recursive: true });
fs.rmdirSync("./src", { recursive: true });

const path = "./";
let regex = /\.(html|md|js)/g;

fs.readdirSync(path)
  .filter((f) => regex.test(f))
  .map((f) => fs.unlinkSync(path + f));

fs.cpSync("./dist/components", "./components", {
  recursive: true,
});

fs.cpSync("./dist/managers", "./managers", {
  recursive: true,
});

fs.cpSync("./dist/styles.css", "./styles.css");

fs.rmdirSync("./dist", { recursive: true });
