'use strict';

var path = require('path');
var jsonf = require('jsonfile');

var argv = require('yargs').argv;

function processConfig(gulp, config) {
    var wrapper = gulp;
    wrapper._internal = {
        gulp: gulp
    };

    wrapper.config = config;
    var envName = argv['env'] ? argv['env'] : "dev";
    wrapper.config.env = wrapper.config.env[envName];
    wrapper.bundles = {};

    var bowerRC = jsonf.readFileSync(path.join(__dirname, '../.bowerrc'));
    var bowerIgnore = "!" + path.join(bowerRC.directory, "**/*");

    var env = wrapper.config.env;
    config.buildPath = env.buildPath;

    function processBundle(bundle, name) {
        bundle.buildPath = path.resolve(path.join(config.buildPath, bundle.path));
        bundle.sourceGlobs = bundle.sourceDirs.map(function (dir) {
            return path.join(dir, "**/*" + bundle.extension);
        });
        bundle.sourceGlobs.push(bowerIgnore);
        bundle.mainFiles = bundle.main ? bundle.main.map(function (mainFile) {
            return path.resolve(mainFile);
        }) : [];
        bundle._main = bundle.main;
        Object.defineProperty(bundle, "main", {
            get: function () {
                return gulp.src(bundle._main);
            },
            set: function (value) {
               //TODO Error
            }
        });
        Object.defineProperty(bundle, "sources", {
            get: function () {
                return gulp.src(bundle.sourceGlobs).pipe(gulp.$.cached(name + "-sources"));
            },
            set: function (value) {
               //TODO Error
            }
        });
    }
    var bundleKeys = Object.keys(config.bundles);
    for (var index in bundleKeys) {
        var key = bundleKeys[index];
        var bundle = config.bundles[key];

        processBundle(bundle, key);
        wrapper.bundles[key] = bundle;
    }


    return wrapper;
}



module.exports = (function config() {
    var gulp = require('gulp');

    var plugins = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'main-bower-files',
            'uglify-save-license'
        ]
    });
    plugins.license = require('./license');
    plugins.merge = require("event-stream").concat;
    var browserSync = require('browser-sync');
    plugins.reload = browserSync.reload;
    gulp.$ = plugins;
    var wrapper = processConfig(gulp, require('./config'));

    wrapper.createSource = function createSource(filename, string) {
        var src = require('stream').Readable({
            objectMode: true
        })
        src._read = function () {
            this.push(new gulp.$.util.File({
                cwd: "",
                base: "",
                path: filename,
                contents: new Buffer(string)
            }))
            this.push(null)
        };
        return src
    };

    return wrapper;
}());