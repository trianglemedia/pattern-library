'use strict';

var gulp = require('./wrapper');
var path = require('path');
var reactify = require('reactify');
var watchify = require('watchify');
var browserify = require('browserify');
var browserifyShim = require('browserify-shim');
var es6ify = require('es6ify');
var source = require('vinyl-source-stream');

var scriptBundle = gulp.bundles.scripts;


function createBundler() {
  var bundler = browserify({
    debug: gulp.config.env === "dev",
    basedir: path.join(__dirname, ".."),
    cache: {},
    packageCache: {},
    fullPaths: true
  }).transform(reactify).transform(es6ify);
  for (var i in scriptBundle.mainFiles) {
    bundler.add(scriptBundle.mainFiles[i]);
  }
  return bundler;
}

gulp.task('scripts', ['scripts:lint', 'scripts:libs'], function () {
  var bundle = createBundler();
  bundle
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest(scriptBundle.buildPath));
});

gulp.task('scripts:libs', function () {
  return gulp.src(gulp.$.mainBowerFiles({
      filter: /.+(\.js)$/ig
    }))
    .pipe(gulp.$.concatSourcemap('libs.js'))
    .pipe(gulp.dest(scriptBundle.buildPath));
});

gulp.task('scripts:lint', function () {
  return scriptBundle.sources
    .pipe(gulp.$.react({
      harmony: true
    }))
    .pipe(gulp.$.jshint('.jshintrc'))
    .pipe(gulp.$.jshint.reporter('jshint-stylish'))
    .pipe(gulp.$.jshint.reporter('fail'));
});

gulp.task('scripts:watch', ['scripts'], function () {
  var bundler = watchify(createBundler());

  bundler.on('update', rebundle);

  function rebundle() {
    gulp.$.util.log("Rebundling");
    return bundler.bundle()
      .on('error', gulp.$.util.log.bind(gulp.$.util, 'Browserify Error'))
      .pipe(source('bundle.js'))
      .pipe(gulp.dest(scriptBundle.buildPath))
      .pipe(gulp.$.reload({stream:true}));
  }

  return rebundle();
});