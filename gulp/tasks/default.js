const gulp = require('gulp');
const runSequence = require('run-sequence');
const browserSync = require('browser-sync');

gulp.task('browserSync', function() {
    browserSync.init({
      server: {
        baseDir: 'web'
      },
    })
  });


gulp.task('default',function(){
    runSequence(['browserSync','scripts','sass','page','fonts','images','watch']);
});