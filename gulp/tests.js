'use strict';

var gulp = require('./wrapper');
var path = require('path');

gulp.task("test", ["styles:lint", "scripts:lint"], function () {
    var configPath = path.join(gulp.config.env.configDir, 'karma.conf.js');
    gulp.src("./tests/**/*.js")
        .pipe(gulp.$.mocha({
            reporter: 'spec',
            globals: {
                should: require('should')
            }
        }))
        .on('error', function (err) {
            // Make sure failed tests cause gulp to exit non-zero
            throw err;
        });
});