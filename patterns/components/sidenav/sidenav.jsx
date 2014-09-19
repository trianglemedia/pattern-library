/** @jsx React.DOM */
(function() {
"use strict";
var React = require('react/addons');


var SideNav = React.createClass({
  getInitialState: function() {
   return {};
  },
  componentDidMount: function() {
  },
  componentWillUnmount: function() {
  },
  render: function() {
    var cx = React.addons.classSet;
    var classCheck = {
      'sidenav': true 
    };
    var classes = cx(classCheck);
    var magellan = "0";
    if(this.props.magellan) {
      magellan = "1";
    }
    return (
      <div className={classes}>
      <ul>
      {
          this.props.items.map(function(item) {
            var key  = "sidenav-item-"+item.name;
            var linkClasses = "";
            if(item.active) {
              linkClasses += " active";
            }
            var location = item.name.toLowerCase();
            var linkLocation = "#"+location;
            
        return (
        <li key={key} className="sidenav-item">
        <a href={linkLocation} data-tpl-magellan={magellan} 
          data-tpl-magellan-marker={location} 
          className={linkClasses}>
        {item.name}
        </a>
        </li>
        );
      })
    }
      </ul>
      </div>
    );
  }
});

module.exports = SideNav;

}());
