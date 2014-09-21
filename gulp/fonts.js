var gulp = require('./wrapper');
var path = require('path');

gulp.task('fonts', function () {
    return gulp.src(gulp.$.mainBowerFiles())
        .pipe(gulp.$.filter('**/*.{eot,svg,ttf,woff}'))
        .pipe(gulp.$.flatten())
        .pipe(gulp.dest(path.join(gulp.config.buildPath, 'fonts')))
        .pipe(gulp.$.size());
});
