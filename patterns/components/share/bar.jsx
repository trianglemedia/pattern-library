/** @jsx React.DOM */
(function() {
"use strict";
var React = require('react/addons');

var Count = require('./count.jsx');
var Button = require('./button.jsx');


var Bar = React.createClass({
  getInitialState: function() {
    return {};
  },
  componentDidMount: function() {
  },
  componentWillUnmount: function() {
  },
  render: function() {
    var cx = React.addons.classSet;
    var classCheck = {
      'share-bar': true
    };
    var classes = cx(classCheck);
    return (
     <div className={classes}>
     <div className="share-bar-count">
     <Count count={this.props.count}/>
     </div>
     <div className="share-bar-buttons">
     <span className="share-bar-button">
     <Button type="facebook"/>
     </span>
     <span className="share-bar-button">
     <Button type="twitter"/>
     </span>
     <span className="share-bar-button">
     <Button type="pinterest"/>
     </span>
     </div>
     </div>
    );
  }
});

module.exports = Bar;

}());

