'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license']
});
var merge = require('merge-stream');

$.license = require('./license');

function pipeStylesheet(fromFile, toFile) {
    return gulp.src(fromFile)
        .pipe($.plumber({}))
        .pipe($.rubySass({
            loadPath: ['bower_components/', 'patterns/']
        }))
        .pipe($.autoprefixer('> 5%'))
        //.pipe(gulp.dest('.tmp/stylesheets/'))
        .pipe($.concat(toFile))
        .pipe($.csso())
        .pipe($.license())
        .pipe(gulp.dest('.tmp/stylesheets/'))
        .pipe($.size());
}

gulp.task('styles', ['styles:vendor', 'styles:gallery'], function () {
    return pipeStylesheet('patterns/patterns.scss', 'patterns.css');
});

gulp.task('styles:vendor', function() {
    return gulp.src($.mainBowerFiles({
            filter: /(.*)\.css/ig
    }))
    .pipe($.concat('vendor.css'))
    .pipe($.csso())
    .pipe(gulp.dest('.tmp/stylesheets/'))
    .pipe($.size());
});

gulp.task('styles:gallery', ['styles:vendor'], function () {
    return pipeStylesheet('gallery/gallery.scss', 'gallery.css');
});