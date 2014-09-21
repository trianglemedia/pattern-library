'use strict';

var gulp = require('./wrapper');
var path = require('path');
var styleBundle = gulp.bundles.stylesheets;

gulp.task('styles', ['fonts', 'styles:lint'], function () {
    return styleBundle.main
        .pipe(gulp.$.plumber({}))
        .pipe(gulp.$.sass({
            includePaths: ["patterns/vendor/foundation/scss/"]
        }))
        .pipe(gulp.dest(styleBundle.buildPath))
        .pipe(gulp.$.filter("*.css"))
        .pipe(gulp.$.autoprefixer(styleBundle.autoprefixer))
        .pipe(gulp.$.concat('app.css'))
        //.pipe(gulp.$.combineMediaQueries({
            //log: true
        //}))
        .pipe(gulp.$.csso())
        //.pipe(gulp.$.license())
        .pipe(gulp.dest(styleBundle.buildPath))
        .pipe(gulp.$.size())
        .pipe(gulp.$.reload({stream:true}));
});

gulp.task('styles:lint', function () {
    return styleBundle.sources
        .pipe(gulp.$.plumber({}))
        .pipe(gulp.$.scssLint({
            config: path.join(gulp.config.env.configDir,"sass_lint.yml"),
            bundleExec: true
        }))
        .pipe(gulp.$.scssLint.failReporter());
});

gulp.task('styles:watch', ['styles'], function () {
    gulp.watch(styleBundle.sourceGlobs, ['styles']);
});

gulp.task('styles:deploy', ['styles:lint'], function() {

});