'use strict';


module.exports = {
    bundles: {
        scripts: {
            path: "scripts",
            extension: ".{js,jsx}",
            sourceDirs: ["./patterns", "./gallery"],
            main: ["./patterns/patterns.js", "./gallery/gallery.jsx"]
        },
        stylesheets: {
            path: "stylesheets",
            extension: ".scss",
            sourceDirs: ["./patterns", "./gallery"],
            main: ["./patterns/patterns.scss", "./gallery/gallery.scss"],
            autoprefixer: "> 5%"
        },
        images: {
            path: "images",
            extension: ".{png,jpg,jpeg}",
            sourceDirs: ["./patterns", "./gallery"]

        }
    },
    env: {
        dev: {
            buildPath: ".tmp/"
        }
    }
};