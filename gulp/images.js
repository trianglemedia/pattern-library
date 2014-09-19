'use strict';

var gulp = require('./wrapper');

gulp.task('images', function () {
    return gulp.bundles.images.sources
        .pipe(gulp.$.cache(gulp.$.imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest(gulp.bundles.images.buildPath))
        .pipe(gulp.$.size());
});