/** @jsx React.DOM */
(function() {
"use strict";
var React = require('react/addons');

var marked = require('marked');
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});


var Post = React.createClass({
  render: function() {
    return (
      <div className="post" dangerouslySetInnerHTML={{
        __html: marked(this.props.value)
    }} />
    );
  }
});

module.exports = Post;

}());