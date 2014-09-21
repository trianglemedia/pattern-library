/** @jsx React.DOM */
(function() {
"use strict";
var React = require('react/addons');


var Avatar = React.createClass({
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
      'user-avatar': true ,
      'user-avatar-small': this.props.size === "small"
    };
    var classes = cx(classCheck);
    var imageSource = "/images/" + this.props.name.toLowerCase() + ".jpg";
    return (
     <a href="#" className={classes}><img src={imageSource}/></a>
    );
  }
});

module.exports = Avatar;


}());