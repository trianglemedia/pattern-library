'use strict';

var gulp = require('./wrapper');
var path = require('path');

var htmlBundle = gulp.bundles.html;

gulp.task('html', ['styles', 'scripts'], function () {
    var assets = gulp.$.useref.assets();
    return htmlBundle.sources
        .pipe(gulp.$.inject(gulp.bundles.scripts.results, {
            read: false,
            starttag: '<!-- inject:' + gulp.bundles.scripts.name +
                ' -->',
            addRootSlash: true
        }))
        .pipe(gulp.$.inject(gulp.bundles.stylesheets.results, {
            read: false,
            starttag: '<!-- inject:' + gulp.bundles.stylesheets.name +
                ' -->',
            addRootSlash: true
        }))
        //.pipe(assets)
        //.pipe(gulp.$.rev())
        .pipe(gulp.dest(htmlBundle.buildPath))
        .pipe(gulp.$.size());
    /*.pipe($.useref.assets())
        .pipe($.rev())
        .pipe(jsFilter)
        .pipe($.ngAnnotate())
        .pipe($.uglify({
            preserveComments: $.uglifySaveLicense
        }))
        .pipe(jsFilter.restore())
        .pipe(cssFilter)
        .pipe($.replace(
            'bower_components/bootstrap-sass-official/vendor/assets/fonts/bootstrap',
            'fonts'))
        .pipe($.csso())
        .pipe(cssFilter.restore())
        .pipe($.useref.restore())
        .pipe($.useref())
        .pipe($.revReplace())
        .pipe(gulp.dest('dist'))
        .pipe($.size());*/
});

gulp.task('html:watch', ['html'], function() {});