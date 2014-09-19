/** @jsx React.DOM */
(function() {
"use strict";
var React = require('react/addons');

var Link = require('./link.jsx');
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
     <div className="user-card-primary">
     <div className="user-card-avatar">
     <Avatar name={this.props.name}/>
     </div>
     <div className="user-card-info">
     <Link name={this.props.name}/>
     </div>
     </div>
      <div className="user-card-about">
      <p>
      I don't criticize you! And if you're worried about criticism, 
      sometimes a diet is the best defense.
      That's what it said on 'Ask Jeeves.' I'm afraid I just blue myself. 
      I'm half machine. I'm a monster. I'm a monster. Marry me.
      </p>
      </div>
     
     </div>
    );
  }
});

module.exports = Card;

}());
