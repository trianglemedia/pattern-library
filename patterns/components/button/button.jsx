/** @jsx React.DOM */
(function() {
"use strict";
var React = require('react/addons');


var Button = React.createClass({
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
      'button': true,
      'button-primary': this.props.primary,
      'button-small': this.props.small,
      'button-loading': this.props.loading,
      'button-disabled': this.props.disabled || this.props.loading,
      'button-combo': this.props.combo,
      'button-combo-closed': this.props.combo
    };
    var classes = cx(classCheck);
    var wrapperClassCheck = {
      'button-wrapper': true,
      'button-combo-wrapper': this.props.combo
    };
    var wrapperClasses = cx(wrapperClassCheck);
    var dropDown = "";
    if(this.props.combo) {
      var dropDownClassCheck = {
        'button': true,
        'button-dropdown': true,
        'button-small': this.props.small,
        'button-primary': this.props.primary
      };
      var dropDownClasses = cx(dropDownClassCheck);
      var dropDownOptions = <div className="button-combo-options">
        <ul className="button-combo-options">
          <li>Hello</li>
        </ul>
      </div>;
      dropDown = <span>
      <a className={dropDownClasses}>
        <i className="fa fa-angle-down fa-fw"></i>
      </a>
      {dropDownOptions}
      </span>;

    }
    return (
      <span className={wrapperClasses}>
        <a className={classes}>
          <span className="button-loader"></span>
        {this.props.text}
      </a>{dropDown}
      </span>
    );
  }
});

module.exports = Button;


}());