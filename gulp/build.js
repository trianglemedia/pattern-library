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



gulp.task('bower', function() {
  return gulp.src($.mainBowerFiles()).pipe(gulp.dest('.tmp/lib/'))
});

gulp.task('build', ['bower', 'html', 'views', 'images', 'fonts']);