var gulp = require("gulp");
var plugins = require('gulp-load-plugins')();
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var jslint = require('gulp-jslint');

var paths = {
  js: ['./src/**/*.js']
};

gulp.task('js',function(){
   return gulp.src(paths.js)
    .pipe(concat('crea-images-preloader.angular.js'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('minify-js',function(){
	 return gulp.src(paths.js)
    .pipe(concat('crea-images-preloader.angular.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function () {
    gulp.watch(paths.js, ['js']);
});

gulp.task('default', ['watch', 'js']);
gulp.task('build', ['minify-js', 'js']);