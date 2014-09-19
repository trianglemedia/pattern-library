/** @jsx React.DOM */
(function() {
"use strict";
var React = require('react/addons');

var Avatar = require('./avatar.jsx');
var Link = require('./link.jsx');


var Author = React.createClass({
  getInitialState: function() {
    return {};
  },
  componentDidMount: function() {
  },
  componentWillUnmount: function() {
  },
  render: function() {
    
    return (
      <div className="user-author">
    <div className="user-author-avatar">
     <Avatar size="small" name={this.props.name}/>
     </div>
     <div className="user-author-info">
      <Link name={this.props.name}/>
     </div>
     </div>
    );
  }
});

module.exports = Author;

}());
