/** @jsx React.DOM */
(function() {
"use strict";
var React = require('react/addons');


var Link = React.createClass({
  getInitialState: function() {
    return {};
  },
  componentDidMount: function() {
  },
  componentWillUnmount: function() {
  },
  render: function() {
    return (
     <a className="user-link" href="/user/{this.props.name}">
     {this.props.name}
     </a>
    );
  }
});

module.exports = Link;

}());
