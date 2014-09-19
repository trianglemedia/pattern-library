'use strict';

var gulp = require('./wrapper');

var styleBundle = gulp.bundles.stylesheets;

gulp.task('styles', ['styles:lint'], function () {
    return styleBundle.main
        .pipe(gulp.$.plumber({}))
        .pipe(gulp.$.rubySass({
            loadPath: styleBundle.sourceDirs,
            sourcemap: gulp.config.env === "dev",
            sourcemapPath: styleBundle.buildPath,
            compass: true,
            bundleExec: true,
            style: "compact"
        }))
        .pipe(gulp.dest(styleBundle.buildPath))
        .pipe(gulp.$.filter("*.css"))
        .pipe(gulp.$.autoprefixer(styleBundle.autoprefixer))
        .pipe(gulp.$.concat('app.css'))
        .pipe(gulp.$.csso())
        .pipe(gulp.$.license())
        .pipe(gulp.dest(styleBundle.buildPath))
        .pipe(gulp.$.size());
});

gulp.task('styles:lint', function () {
    return styleBundle.sources
        .pipe(gulp.$.plumber({}))
        .pipe(gulp.$.scssLint({
            config: "sass_lint.yml",
            bundleExec: true
        }))
        .pipe(gulp.$.scssLint.failReporter());
});

gulp.task('styles:watch', ['styles'], function() {
    gulp.watch(styleBundle.sourceGlobs, ['styles']);
});