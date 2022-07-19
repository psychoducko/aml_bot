let gulp = require('gulp');
let zip = require('gulp-zip');
let notify = require("gulp-notify");
let path = require('path');
let fs = require('fs');
let uuid = require('uuid')


function swaggerZip() {
  let filename = 'swagger.zip'
  return gulp.src([
    './build/**/*',
  ], {dot: true,}).pipe(zip(filename))
    .pipe(gulp.dest('../'))
    .pipe(notify({
      message: 'Архив SWAGGER готов',
      sound: true,
      title: 'Altrp JS'
    }))
}
const copyFiles = gulp.parallel(
  cb=>{
    return gulp.src([
      './package.json',
      './package-lock.json',
      './README.md',
      './plugin_meta',
    ]).pipe(gulp.dest('./build'))
  },
  cb=>{
    return gulp.src([
      './public/**/*',
    ]).pipe(gulp.dest('./build/public'))
  },
);

exports.pack = gulp.series(copyFiles, altimexZip);
