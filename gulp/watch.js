'use strict';

var gulp = require('gulp');

gulp.task('watch', ['bower', 'scripts', 'styles'], function () {
	gulp.watch('patterns/**/*.scss', ['styles']);
	gulp.watch('patterns/**/*.{js,jsx}', ['scripts']);
	gulp.watch('app/images/**/*', ['images']);
	gulp.watch('gallery/*.html', ['html']);
	gulp.watch('gallery/**/*.scss', ['styles:gallery']);
	gulp.watch('gallery/**/*.{js,jsx}', ['scripts:gallery']);
	//gulp.watch('bower.json', ['wiredep']);
});