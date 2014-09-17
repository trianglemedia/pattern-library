/** @jsx React.DOM */
var React = require('react/addons');


var GridRow = React.createClass({
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
    
    };
  var classes = cx(classCheck);
    return (
      <div className="grid-row">{this.props.children}</div>
    );
  }
});

module.exports = GridRow;
