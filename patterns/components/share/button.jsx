/** @jsx React.DOM */
(function() {
"use strict";
var React = require('react/addons');


var Button = React.createClass({
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
      'share-button': true ,
      'share-button-facebook': this.props.type==="facebook",
      'share-button-twitter': this.props.type==="twitter",
      'share-button-pinterest': this.props.type==="pinterest"
    };
    var classes = cx(classCheck);
    return (
     <span className={classes}></span>
    );
  }
});

module.exports = Button;

}());


