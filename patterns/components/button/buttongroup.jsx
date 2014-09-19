/** @jsx React.DOM */
(function() {
"use strict";
var React = require('react/addons');
var $ = require('jquery');

var ButtonGroup = React.createClass({
  getInitialState: function() {
    return {};
  },
  componentDidMount: function() {
  },
  componentWillUnmount: function() {
    
  },
  setOnChildren: function(prop, value) {
      for(var key in this.props.children) {
        if(this.props.children.hasOwnProperty(key)) {
        this.props.children[key].props[prop] = value;
      }
      }
    },
  render: function() {
    var cx = React.addons.classSet;
    var classCheck = {
      'button-group': true,
    };
    var classes = cx(classCheck);
    var children = this.props.children;
    for(var propName in this.props) {
       if(this.props.children.hasOwnProperty(propName) && propName !== "children") {
      var prop = this.props[propName];
      this.setOnChildren(propName, prop);
    }

    }
    return (
      <div className={classes}>{children}</div>
    );
  }
});

module.exports = ButtonGroup;

}());