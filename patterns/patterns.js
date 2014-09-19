'use strict';
//TODO Change to require  with browserify-shim
var objectFit = objectFit || null;

var $ = require('jquery');
var prefix = "tpl-";

var size = require('./size');
var components = require('./components');
var magellan = require('./magellan');

var modules = [size, components, magellan];

var tpl = {
    $: $,
    getAttributeName: function (partialName) {
        return 'data-' + prefix + partialName;
    },
    findAttribute: function (name, value) {
        var valueFind = "";
        if (value) {
            valueFind = '="' + value + '"';
        }
        return $('*[' + this.getAttributeName(name) + valueFind + ']');
    }
};

function initializeModules() {
    var i = 0;
    for (i = 0; i < modules.length; i = i + 1) {
        modules[i].initialize(tpl);
    }
}

function initialize() {

    $(document).ready(function () {
        initializeModules();
        objectFit.polyfill({
            selector: 'img',
            fittype: 'cover'
        });
    });
}

module.exports = {
    initialize: initialize,
    components: components,
    size: size,
    magellan: magellan
};