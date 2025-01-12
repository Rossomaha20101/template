const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass')(require('sass'));
    
function buildStyle() {
  return gulp.src('app/styles/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('public/styles'));
}

function buildPug() {
  return gulp.src('app/pug/*.pug')

    .pipe(pug({
      pretty: true
    }))

    .pipe(gulp.dest('public/'))
}

gulp.task('build', function buildHTML() {
  buildStyle()
  buildPug()
});