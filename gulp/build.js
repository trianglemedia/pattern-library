'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license']
});


gulp.task('views', function () {
    return gulp.src('app/views/**/*.html')
        .pipe($.minifyHtml({
            empty: true,
            spare: true,
            quotes: true
        }))
        .pipe($.ngHtml2js({
            moduleName: 'webapp',
            prefix: 'views/'
        }))
        .pipe(gulp.dest('.tmp/views'))
        .pipe($.size());
});

gulp.task('html', ['styles', 'scripts', 'views'], function () {
    var jsFilter = $.filter('**/*.js');
    var cssFilter = $.filter('**/*.css');

    return gulp.src('gallery/*.html')
        .pipe($.inject(gulp.src('.tmp/views/**/*.js'), {
            read: false,
            starttag: '<!-- inject:views -->',
            addRootSlash: false,
            addPrefix: '../'
        }))
        .pipe($.useref.assets())
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
        .pipe($.size());
});


gulp.task('fonts', function () {
    return gulp.src($.mainBowerFiles())
        .pipe($.filter('**/*.{eot,svg,ttf,woff}'))
        .pipe($.flatten())
        .pipe(gulp.dest('dist/fonts'))
        .pipe($.size());
});


gulp.task('bower', function() {
  return gulp.src($.mainBowerFiles()).pipe(gulp.dest('.tmp/lib/'))
});

gulp.task('build', ['bower', 'html', 'views', 'images', 'fonts']);