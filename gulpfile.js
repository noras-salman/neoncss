const { series, src, dest, watch } = require("gulp");
const babel = require("gulp-babel");
const plumber = require("gulp-plumber");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const rename = require("gulp-rename");
const replace = require("gulp-replace");

const sass = require("gulp-sass")(require("sass"));
sass.compiler = require("node-sass");
const cleanCSS = require("gulp-clean-css");
const liveReload = require("gulp-livereload");
const fs = require("fs");

var pjson = require("./package.json");

function exportCSS() {
  return src("src/scss/neoncss.scss")
    .pipe(plumber())
    .pipe(sass().on("error", sass.logError))
    .pipe(cleanCSS())
    .pipe(rename("styles.css"))
    .pipe(dest(`dist`))
    .pipe(rename("neoncss.min.css"))
    .pipe(dest(`release/${pjson.version}/css`))
    .pipe(dest(`release/latest/css`))
    .pipe(liveReload());
}

function exportJS() {
  return src("src/js/managers/*.js")
    .pipe(plumber())
    .pipe(
      babel({
        presets: [
          [
            "@babel/env",
            {
              modules: false,
            },
          ],
        ],
      })
    )
    .pipe(uglify())
    .pipe(concat("neoncss.min.js"))
    .pipe(dest(`release/${pjson.version}/js`))
    .pipe(dest(`release/latest/js`))
    .pipe(liveReload());
}

function createDocumentation() {
  return new Promise(function (resolve, reject) {
    const mdDir = "./docs/md/";
    const docsFile = "./docs/docs.json";

    const files = fs.readdirSync(mdDir);
    fs.writeFileSync(docsFile, JSON.stringify(files));
    resolve();
  });
}

function exportModules() {
  const dirs = ["managers", "components"];
  const files = [];
  for (let dir of dirs) {
    const temp = fs
      .readdirSync(`dist/${dir}/`)
      .map((file) => `./dist/${dir}/${file}`);
    files.push(...temp);
  }
  fs.writeFileSync(
    "./index.js",
    files
      .map(
        (file) =>
          `export * from "${file.replace(".jsx", "").replace(".js", "")}"`
      )
      .join("\n")
  );

  return Promise.all([
    src("src/js/managers/*.js")
      .pipe(replace(/class /g, "export class "))
      .pipe(dest(`dist/managers`)),
    src("src/js/components/*.jsx").pipe(dest(`dist/components`)),
  ]);
}

exports.exportCSS = exportCSS;
exports.exportJS = exportJS;
exports.createDocumentation = createDocumentation;
exports.exportModules = exportModules;

exports.default = series(
  exportCSS,
  exportJS,
  createDocumentation,
  exportModules
);
exports.watch = function () {
  liveReload.listen({
    port: 8010,
  });
  watch("src/scss/*.scss", exportCSS);
  watch("src/js/*.js", series(exportJS));
  watch("docs/md/*.md", series(createDocumentation));
};
