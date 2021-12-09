var { src, dest } = require("gulp");
var uglify = require("gulp-uglify");
var ts = require("gulp-typescript");
var babel = require("gulp-babel");

const defaultTask = (cb) => {
  // place code for your default task here
  return src("./src/*.ts")
    .pipe(ts())
    .pipe(babel())
    .pipe(uglify())
    .pipe(dest("build"));
};

exports.default = defaultTask;
