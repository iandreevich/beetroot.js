const { src, dest, parallel, series, watch } = require("gulp");
const brwSync = require("browser-sync").create();
const sass = require("gulp-sass");
const concat = require("gulp-concat");
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");
const del = require("del");
const cleanCSS = require("gulp-clean-css");
const autoprefixer = require("gulp-autoprefixer");

function browserSync() {
  brwSync.init({
    server: { baseDir: "app/" },
    notify: false,
    onlne: true,
  });
}

function styles() {
  return src([
    "node_modules/bootstrap/dist/css/bootstrap.min.css",
    "app/styles/main.scss",
  ])
    .pipe(sass())
    .pipe(
      autoprefixer({
        cascade: false,
        overrideBrowserslist: ["last 2 versions"],
      })
    )

    .pipe(concat("main.min.css"))
    .pipe(dest("app/styles/css"))
    .pipe(brwSync.stream());
}

function watching() {
  watch("app/styles/**/*.scss", styles);
  watch("app/index.html").on("change", brwSync.reload);
}
function minization() {
  return src("app/img/*")
    .pipe(dest("app/image"))
    .pipe(imagemin())
    .pipe(newer("app/image"));
}
function cleanImage() {
  return del("app/image/*", { force: true });
}

function build() {
  return src(["app/image/*", "app/styles/css/*", "app/**/*.html"], {
    base: "app",
  }).pipe(dest("dist"));
}
function cleanCssFile() {
  return src("app/styles/css/*.css")
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(dest("dist"));
}

exports.brwSync = browserSync;
exports.style = styles;
exports.watch = watching;
exports.minImg = minization;
exports.cleanImg = cleanImage;
exports.reopimg = series(cleanImage, minization);
exports.cleanCss = cleanCssFile;
exports.build = build;

exports.default = parallel(styles, browserSync, watching);
