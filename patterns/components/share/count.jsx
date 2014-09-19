/** @jsx React.DOM */
(function() {
"use strict";
var React = require('react/addons');


var Count = React.createClass({
  getInitialState: function() {
    return {};
  },
  componentDidMount: function() {
  },
  componentWillUnmount: function() {
  },
  render: function() {
    var count = this.props.count;
    var value = count;
    var thousands;
    if(count > 10000) {
      thousands = Math.floor(count / 1000);
      value = thousands  + "k";
    } else if(count > 1000) {
      thousands = Math.floor(count / 1000);
      var hundreds = Math.floor((count % 1000))/100;
      value = thousands + "."+hundreds + "k";
    }
    return (
     <span className="share-count">
     <span className="share-count-value">
     {value}
     </span> shares
     </span>
    );
  }
});

module.exports = Count;


}());