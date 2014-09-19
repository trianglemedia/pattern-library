'use strict';

var gulp = require('./wrapper');

gulp.task('clean', function () {
    return gulp.src([gulp.config.buildPath], {
        read: false
    }).pipe(gulp.$.rimraf());
});