/** @jsx React.DOM */
(function() {
"use strict";
var React = require('react/addons');


var Entry = React.createClass({
  render: function() {
    return (
      <div className="Entry">
      {this.props.children}
      </div>
    );
  }
});

module.exports = Entry;

}());