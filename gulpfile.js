const gulp = require('gulp'),
      watch = require('gulp-watch'),
      browserSync = require('browser-sync').create(),
      babel = require('gulp-babel'),
      concat = require('gulp-concat'),
      rename = require('gulp-rename'),
      sourcemaps = require('gulp-sourcemaps'),
      uglify = require('gulp-uglify'),
      del = require('del');

const jsSrc = './src/es6_scripts/**/*.js';

gulp.task('clean', function() {
  return del(['./docs/dist', './docs/es6', './src/es5_compiled'])
})


gulp.task("scripts", function() {
  return gulp.src(jsSrc)
    .pipe(sourcemaps.init())
    .pipe(babel({presets: ['@babel/preset-env']}))
    .pipe(concat('all_scripts.js'))
    .pipe( rename({
      extname: '.min.js'
    }) )
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./src/es5_compiled'))
    .pipe(browserSync.stream());
  });

  gulp.task("server_scripts", function() {
    return gulp.src('./es6_node_server/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel({presets: ['@babel/preset-env']}))
    .pipe(concat('server.js'))
    .pipe( rename({
      extname: '.min.js'
    }) )
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./docs/dist'))
    .pipe(browserSync.stream());
  });

  gulp.task('watch', function(){
    browserSync.init({
      server:{
        baseDir: './src'
      }
    });
    gulp.watch('./src/es6_scripts/script_ES6.js', gulp.series('scripts'));
    gulp.watch('./es6_node_server/*.js', gulp.series('server_scripts'));
    gulp.watch('./src/*.html').on('change', browserSync.reload);
  })
