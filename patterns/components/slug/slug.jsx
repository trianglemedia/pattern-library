/** @jsx React.DOM */
(function() {
"use strict";
var React = require('react/addons');


var Slug = React.createClass({
  render: function() {
    return (
      <div className="slug">
      {this.props.children}
      </div>
    );
  }
});

module.exports = Slug;

}());