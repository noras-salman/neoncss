const { series, src, dest, watch } = require("gulp");
const uglify = require("gulp-uglify");
const cleanCSS = require("gulp-clean-css");
const liveReload = require("gulp-livereload");

function minifyCSS() {
  return src("src/css/*.css")
    .pipe(cleanCSS())
    .pipe(dest("public/dist/css"))
    .pipe(liveReload());
}

function minifyJS() {
  return src("src/js/*.js")
    .pipe(uglify())
    .pipe(dest("public/dist/js"))
    .pipe(liveReload());
}

exports.minifyCSS = minifyCSS;
exports.default = series(minifyCSS, minifyJS);
exports.watch = function () {
  liveReload.listen({
    port: 8010,
  });
  watch("src/css/*.css", minifyCSS);
  watch("src/js/*.js", series(minifyJS));
}
