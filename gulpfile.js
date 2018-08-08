'use-strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var imagemin = require('gulp-imagemin');
// var minify = require('gulp-minify');
var browserSync = require('browser-sync').create();
//Tasks
gulp.task('msg', function() {
  console.log("Gulp is running..");
});
//Browser Sync Load Port - localhost:3000
gulp.task('browser-sync', function() {
  browserSync.init({
    watch: true,
    server: {
      baseDir: 'httpdocs',
      proxy: "localhost:8888"
    }
  });
});
// Html file
gulp.task('html', function() {
  gulp.src('src/*.html')
  .pipe(gulp.dest('httpdocs'))
});
//Sass
gulp.task('sass', function() {
  gulp.src('src/assets/sass/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('httpdocs/assets/css'))
});
//Script
gulp.task('js', function() {
  gulp.src('src/assets/js/*.js')
  // .pipe(minify())
  .pipe(gulp.dest('httpdocs/assets/js'))
});
//Image
gulp.task('image', function() {
  gulp.src('src/assets/images/*')
  .pipe(imagemin())
  .pipe(gulp.dest('httpdocs/assets/images'))
});

gulp.task('build',['msg','html','sass','image','js']);
gulp.task('watch', function() {
  browserSync.init({
    watch: true,
    server: {
      baseDir: 'httpdocs',
      proxy: "localhost:8888"
    }
  });
  gulp.watch('src/*.html', ['html']);
  gulp.watch('src/assets/*.scss', ['sass']);
  gulp.watch('src/assets/sass/**/*.scss', ['sass']);
  gulp.watch('src/assets/images/*', ['image']);
  gulp.watch('src/assets/js/*.js', ['js']);
});
gulp.task('default',['watch']);
