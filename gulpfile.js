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

function minifyCSS() {
  return src("src/scss/neoncss.scss")
    .pipe(plumber())
    .pipe(sass().on("error", sass.logError))
    .pipe(cleanCSS())
    .pipe(rename("neoncss.min.css"))
    .pipe(dest("dist/css"))
    .pipe(liveReload());
}

function minifyJS() {
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
    .pipe(liveReload());
}

exports.minifyCSS = minifyCSS;
exports.default = series(minifyCSS, minifyJS);
exports.watch = function () {
  liveReload.listen({
    port: 8010,
  });
  watch("src/scss/*.scss", minifyCSS);
  watch("src/js/*.js", series(minifyJS));
};
