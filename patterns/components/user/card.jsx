/** @jsx React.DOM */
var React = require('react/addons');

var Author = require('./link.jsx');
var Avatar = require('./avatar.jsx');

var Card = React.createClass({
  getInitialState: function() {
    return {};
  },
  componentDidMount: function() {
  },
  componentWillUnmount: function() {
  },
  render: function() {
    return (
     <div className="user-card">
     <div className="user-card-avatar">
     <Avatar name={this.props.name}/>
     </div>
     <div className="user-card-info">
     <Author name={this.props.name}/>
    
     </div>
     </div>
    );
  }
});

module.exports = Card;


