var gulp = require('gulp');
var watch = require('gulp-watch');
var babel = require('gulp-babel');
var ts = require('gulp-typescript');
var webpack = require('gulp-webpack');

gulp.task('markup', function(){
  return watch('app/*.html',{ignoreInitial: false})
    .pipe(gulp.dest('dist/'));
});

gulp.task('css', function(){
  return watch('app/css/*.css',{ignoreInitial: false})
    .pipe(gulp.dest('dist/css'));
});

// gulp.task('js', function(){
//   return watch('app/js/*.js',{ignoreInitial: false})
//     .pipe(gulp.dest('dist/'));
// });

gulp.task('ts', function(){
  return watch('app/ts/*.ts',function(){  
    gulp.src('app/ts/*.ts')
    .pipe(ts({
      module:'commonjs'
    }))
    .pipe(gulp.dest('dist'));
  }); 
});

gulp.task('webpack', function() {
  return watch('dist/main.js', function(){
    gulp.src('dist/main.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('dist/'));
  });
  // return gulp.src('dist/main.js')
  //   .pipe(webpack(require('./webpack.config.js')))
  //   .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['markup','css','ts','webpack']);