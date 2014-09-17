'use strict';

var $ = require('jquery');


/**
TODO: Allow for out-of-order locations.
TODO: Ensure we're in the proper location zone.

*/
module.exports = {
    initialize: function (tpl) {
        var locations = {};
        function update() {
            var activeClass= "active";
            var scrollTop = $(window).scrollTop();
            var name = "magellan";
            var locationPartialName = "magellan-location";
            var markerPartialName = "magellan-marker";
            var markerName = tpl.getAttributeName(markerPartialName);
            var locationName = tpl.getAttributeName(locationPartialName);
            var $elements = tpl.findAttribute(name, "1");
            $elements.each(function () {
                var $this = $(this);
                $this.removeClass(activeClass);
                var location = $this.attr(markerName);
                var $destination = tpl.findAttribute(locationPartialName, location);
                if($destination.length == 0) {
                    return;
                }
                var destinationScrollTop = $destination.offset().top;
                if(scrollTop >= destinationScrollTop) {
                    $elements.each(function removeActive() {
                        $(this).removeClass(activeClass);
                    });
                    $this.addClass(activeClass);
                }
            });
            
            
        };
        $(window).bind('load scroll', update);
}
};