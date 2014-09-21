/** @jsx React.DOM */
(function() {
"use strict";
var React = require('react/addons');
var Author = require('../user/').Author;
var Link = require('../user/').Link;
var Post =require('../post/post.jsx');


var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
      <div className="comment-info">

      <span className="comment-info-author">
        <Author name={this.props.author} date="3/21/14 1:15pm"/>
      </span>
      <span className="comment-info-actions">
        <a href="#">reply</a>
      </span>
      </div>

      <div className="comment-post">
        <Post value={this.props.post}/>
      </div>
      </div>
    );
  }
});

module.exports = Comment;

}());