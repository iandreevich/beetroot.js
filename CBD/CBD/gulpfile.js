"use strict";

const { src, dest, parallel, series, watch } = require("gulp");
const brwSync = require("browser-sync").create();
const sass = require("gulp-sass");

const concat = require("gulp-concat");
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");
const del = require("del");
const autoprefix = require("gulp-autoprefixer");
const minify = require("gulp-clean-css");
const uglify = require("gulp-uglify");

function browserSync() {
  brwSync.init({
    server: { baseDir: "app/" },
    notify: false,
    online: true,
  });
}

function styles() {
  return src(["app/styles/scss/main.scss"])
    .pipe(sass())
    .pipe(concat("main.min.css"))
    .pipe(
      autoprefix(["last 15 versions", "> 1%", "ie 8", "ie 7"], {
        cascade: true,
      })
    )
    .pipe(minify({ compatibility: "ie8" }))
    .pipe(dest("app/styles/css"))
    .pipe(brwSync.stream());
}
function js() {
  return src(["app/js/scripts/**/*.js"])
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(dest("app/js"));
}

function watching() {
  watch("app/styles/**/*.scss", styles);
  watch("app/js/scripts/**/*.js", js).on("change", brwSync.reload);
  watch("app/index.html").on("change", brwSync.reload);
}

function minimization() {
  return src("app/img/*")
    .pipe(newer("app/imgo"))
    .pipe(imagemin())
    .pipe(dest("app/imgo"));
}

function cleanimg() {
  return del("app/imgo/*", { force: true });
}
function cleanstyles() {
  return del("dist/styles/css/*", { force: true });
}
function cleanhtml() {
  return del("dist/**/*.html", { force: true });
}
function cleanjs() {
  return del("dist/js/*.js", { force: true });
}
function build() {
  return src(
    ["app/imgo/*", "app/styles/css/*", "app/**/*.html", "app/js/main.js"],
    { base: "app" }
  ).pipe(dest("dist"));
}

exports.brwSync = browserSync;
exports.styles = styles;
exports.watch = watching;
exports.minimg = minimization;
exports.cleanimg = cleanimg;
exports.build = build;

exports.reopimg = series(
  cleanimg,
  cleanstyles,
  cleanhtml,
  cleanjs,
  minimization
);

exports.default = parallel(styles, js, browserSync, watching);
