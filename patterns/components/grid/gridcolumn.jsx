/** @jsx React.DOM */
var React = require('react/addons');


var GridColumn = React.createClass({
  getInitialState: function() {
    return {};
  },
  componentDidMount: function() {
  },
  componentWillUnmount: function() {
    
  },
  render: function() {
    var cx = React.addons.classSet;
    if(!this.props.columns) {
      this.props.columns = 1;
    }
    var classCheck = {
    
    };
    classCheck["grid-column-" + this.props.columns] = true;
    classCheck["grid-offset-" + this.props.offset] = this.props.offset;
  var classes = cx(classCheck);
    return (
      <div className={classes}>{this.props.children}</div>
    );
  }
});

module.exports = GridColumn;
