'use strict';


var $ = require('jquery');
var prefix = "tpl-";

var components = require('./components');

var modules = [components];

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
        //TODO Change to require  with browserify-shim
        var objectFit = window.objectFit || null;
        initializeModules();
        objectFit.polyfill({
            selector: 'img',
            fittype: 'cover'
        });
    });
}

module.exports = {
    initialize: initialize,
    components: components
};