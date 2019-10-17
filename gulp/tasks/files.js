const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');

gulp.task('page',function(){
    return gulp.src('app/views/**/*.html')
    .pipe(gulp.dest('web/'));
});

gulp.task('fonts',function(){
    return gulp.src('app/assets/fonts/**/*')
    .pipe(gulp.dest('web/resources/fonts/'));
});

gulp.task('images',function(){
    return gulp.src('app/assets/images/**/*')
    .pipe(imagemin({
        progressive: true,
        svgPlugins: [{
            removeViewBox: true
        }],
        use: [pngquant()],
        interlaced: true
    }))
    .pipe(gulp.dest('web/resources/images/'));
});