var gulp = require('gulp');
var run = require('gulp-run');
var fs = require('fs');

gulp.task('dist', function() {

  fs.unlink('../*.js', function (err) {
    if (err) { console.log(err.message); };
    gulp.src('public/src/*.js').pipe(gulp.dest('../'));
  });

});

gulp.task('default', function() {

});

