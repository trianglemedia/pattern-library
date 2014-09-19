/** @jsx React.DOM */
(function() {
"use strict";
var React = require('react/addons');


var Swatch = React.createClass({
  getInitialState: function() {
    return {};
  },
  componentDidMount: function() {
  },
  componentWillUnmount: function() {
  },
  render: function() {
  var colorClasses = 'swatch-'+this.props.color + ' swatch-display';
  
    return (
      <div className="swatch">
      <span className="swatch-info">
      {this.props.color}
      </span>
      <span className={colorClasses}></span>
      </div>
    );
  }
});

module.exports = Swatch;

}());