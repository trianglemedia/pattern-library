/** @jsx React.DOM */
var React = require('react/addons');
var $ = require('jquery');

var ButtonGroup = React.createClass({
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
      'button-group': true,
    };
    var classes = cx(classCheck);
    var children = this.props.children;
    var setOnChildren = (function setOnChildren(prop, value) {
      for(var key in this.props.children) {
        this.props.children[key].props[prop] = value;
      }
    }).bind(this);
    for(var propName in this.props) {
      if(propName === "children") {
        continue;
      }
      var prop = this.props[propName];
      setOnChildren(propName, prop);

    }
    return (
      <div className={classes}>{children}</div>
    );
  }
});

module.exports = ButtonGroup;
