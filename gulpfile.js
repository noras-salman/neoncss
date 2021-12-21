const { series, src, dest, watch } = require("gulp");
const babel = require("gulp-babel");
const plumber = require("gulp-plumber");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const rename = require("gulp-rename");
const sass = require("gulp-sass");
sass.compiler = require("node-sass");
const cleanCSS = require("gulp-clean-css");
const liveReload = require("gulp-livereload");
var pjson = require("./package.json");

function exportCSS() {
  return src("src/scss/neoncss.scss")
    .pipe(plumber())
    .pipe(sass().on("error", sass.logError))
    .pipe(cleanCSS())
    .pipe(rename("neoncss.min.css"))
    .pipe(dest("dist/css"))
    .pipe(dest(`release/${pjson.version}/css`))
    .pipe(dest(`release/latest/css`))
    .pipe(liveReload());
}

function exportJS() {
  return src("src/js/*.js")
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
    .pipe(dest("dist/js"))
    .pipe(dest(`release/${pjson.version}/js`))
    .pipe(dest(`release/latest/js`))
    .pipe(liveReload());
}

function createDocumentaion() {
  return new Promise(function (resolve, reject) {
    const mdDir = "./docs/md/";
    const docsFile = "./docs/docs.json";
    const fs = require("fs");

    const files = fs.readdirSync(mdDir);
    fs.writeFileSync(docsFile, JSON.stringify(files));
    resolve();
  });
}
exports.exportCSS = exportCSS;
exports.exportJS = exportJS;
exports.createDocumentaion = createDocumentaion;
exports.default = series(exportCSS, exportJS, createDocumentaion);
exports.watch = function () {
  liveReload.listen({
    port: 8010,
  });
  watch("src/scss/*.scss", exportCSS);
  watch("src/js/*.js", series(exportJS));
  watch("docs/md/*.md", series(createDocumentaion));
};
