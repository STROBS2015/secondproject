var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var concatCss = require('gulp-concat-css');
var browserSync = require('browser-sync').create();

gulp.task('css', function() {
    gulp.src([
        'src/css/style.css',
        'src/css/second.css'
    ])
        .pipe(concatCss("bundle.css"))
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/resoure/css'))
        .pipe(browserSync.stream());
});

gulp.task('serve', function() {
    browserSync.init({
        server: "./"
    });
});

gulp.task('default', ['serve', 'css'], function () {
    gulp.watch('src/css/*.css', ['css']);
    gulp.watch('./*.html').on('change', browserSync.reload);
});