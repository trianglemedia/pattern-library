'use strict';

var $ = require('jquery');

module.exports = {
    initialize: function (tpl) {
        function fixHeights() {
            var name = "size-height";
            var fullName = tpl.getAttributeName(name);
            var $elementsNeedingHeight = tpl.findAttribute(name);
            $elementsNeedingHeight.each(function () {
                var $this = $(this);
                var value = $this.attr(fullName);
                var valueParts = value.split(':');
                var nameValue = valueParts[0];
                var portionValue = parseFloat(valueParts[1]);
                if (nameValue === "document") {
                    nameValue = document;
                } else if (nameValue === "window") {
                    nameValue = window;
                }
                var otherHeight = $(nameValue).height();
                var desiredHeight = otherHeight * portionValue;
                $this.css('height', desiredHeight + "px");

            });
            
        };
        $(window).bind('resize load', fixHeights);
    }
}