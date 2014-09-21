'use strict';

var gulp = require('./wrapper');

var source = require('vinyl-source-stream');

var watchify = require('watchify');
var browserify = require('browserify');

gulp.task('watch', ['images:watch', 'html:watch', 'scripts:watch', 'styles:watch'], function () {
	// gulp.watch('patterns/**/*.scss', ['styles']);
	// gulp.watch('patterns/**/*.{js,jsx}', ['scripts']);
	// gulp.watch('app/images/**/*', ['images']);
	// gulp.watch('gallery/*.html', ['html']);
	// gulp.watch('gallery/**/*.scss', ['styles:gallery']);
	// gulp.watch('gallery/**/*.{js,jsx}', ['scripts:gallery']);
	// //gulp.watch('bower.json', ['wiredep']);
});