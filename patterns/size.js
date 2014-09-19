(function () {
    "use strict";
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

            }
            $(window).bind('resize load', fixHeights);
        },

        isViewable: function (elem, complete) {
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();

            var elemTop = $(elem).offset().top;
            var elemBottom = elemTop + $(elem).height();

            var partial = (elemBottom <= docViewBottom);
            var partial2 = (elemTop >= docViewTop);
            if (complete) {
                return partial && partial2;
            } else {
                return (((elemTop >= docViewTop) && (elemTop <=
                    docViewBottom)) || ((elemBottom >= docViewTop) &&
                    (elemBottom <= docViewBottom)));
            }
        }
    };
}());