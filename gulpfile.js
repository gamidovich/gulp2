var gulp = require('gulp');
var scss = require('gulp-scss');
var fileInclude = require('gulp-file-include');

gulp.task('hello', function () {
    console.log('Hello World');
});

gulp.task('scss', function () {
    return gulp.src("main.scss").pipe(scss()).pipe(gulp.dest("css"));
});

gulp.task('watch', function () {
    gulp.watch('*.scss', ["scss"]);
});

gulp.task('incl', function () {
    return  gulp.src("page/**.html").pipe(fileInclude()).pipe(gulp.dest("build"));
});
