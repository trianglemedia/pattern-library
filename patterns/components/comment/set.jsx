/** @jsx React.DOM */
(function() {
"use strict";
var React = require('react/addons');


var Set = React.createClass({
  render: function() {
    return (
      <div className="comment-set">
      {
          this.props.children.map(function(comment) {
            return <div className="comment-set-item">{comment}</div>;
          })
       }   
      </div>
    );
  }
});

module.exports = Set;

}());