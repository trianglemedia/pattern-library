'use strict';

var gulp = require('gulp');
var merge = require('merge-stream');
var browserify = require('gulp-browserify');
var reactify = require('reactify');
var watchify = require('watchify');

var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license']
});



gulp.task('scripts', ['scripts:vendor', 'scripts:gallery'], function () {
  return gulp.src('patterns/patterns.js')
    .pipe(browserify({
      insertGlobals: false,
      debug: false,
      transform: ['reactify']
    }))
    .on('error', $.util.log)
    .on('prebundle', function (bundle) {
    bundle.external('domready');
      bundle.external('react');
      bundle.external('react/addons');
    })
    .pipe(gulp.dest('./.tmp/scripts'));
});

gulp.task('scripts:vendor', ['scripts:vendor:main', 'scripts:vendor:bower'], function () {
  return gulp.src(['.tmp/scripts/vendor_main.js', '.tmp/scripts/vendor_bower.js'])
        .pipe($.concat('vendor.js'))
        .pipe(gulp.dest('.tmp/scripts'));

});

gulp.task('scripts:vendor:main', function() {
 return gulp.src('patterns/vendor.js')
    .pipe(browserify({
      insertGlobals: false,
      debug: false
    }))
    .on('error', $.util.log)
    .on('prebundle', function (bundle) {
      bundle.require("react", {expose: 'react'});
      bundle.require("react/addons", {expose: 'react/addons'});
    })
    .pipe($.concat('vendor_main.js'))
    .pipe(gulp.dest('.tmp/scripts/'))
    .pipe($.size());
});

gulp.task('scripts:vendor:bower', function () {
  return gulp.src($.mainBowerFiles({
      filter: /.+(\.js)$/ig
    }))
    .pipe($.concat('vendor_bower.js'))
    .pipe(gulp.dest('.tmp/scripts/'))
    .pipe($.size());
});

gulp.task('scripts:gallery', function () {
  return gulp.src('gallery/gallery.js')
    .pipe(browserify({
      debug: false,
      transform: ['reactify']
    }))
    .on('error', $.util.log)
    .on('prebundle', function (bundle) {
      //      bundle.external('domready');
      bundle.external('react');
     bundle.external('react/addons');
    })
    .pipe(gulp.dest('./.tmp/scripts'));
});