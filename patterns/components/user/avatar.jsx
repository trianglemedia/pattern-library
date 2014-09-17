/** @jsx React.DOM */
var React = require('react/addons');


var Avatar = React.createClass({
  getInitialState: function() {
    return {};
  },
  componentDidMount: function() {
  },
  componentWillUnmount: function() {
  },
  render: function() {
    var imageSource = "/" + this.props.name.toLowerCase() + ".jpg";
    return (
     <a href="#" className="user-avatar"><img src={imageSource}/></a>
    );
  }
});

module.exports = Avatar;


