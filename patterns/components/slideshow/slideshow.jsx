/** @jsx React.DOM */
(function() {
"use strict";
var React = require('react/addons');

var Post =require('../post/post.jsx');

var $ = require('jquery');

function isViewable(elem, complete) {
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();

            var elemTop = $(elem).offset().top;
            var elemBottom = elemTop + $(elem).height();

            var partial = (elemBottom <= docViewBottom);
            var partial2 = (elemTop >= docViewTop);
            if (complete) {
                return partial && partial2;
            } else {
                return (((elemTop >= docViewTop) && (elemTop <=
                    docViewBottom)) || ((elemBottom >= docViewTop) &&
                    (elemBottom <= docViewBottom)));
            }
}


var Slideshow = React.createClass({
  getInitialState: function() {
    return {position: 0, keybound: false};
  },
  componentDidMount: function() {
     $(window).bind('scroll load', this.checkKeyBindings);
  },
  componentWillUnmount: function() {
    
  },
  checkKeyBindings: function() {
    var keybound = this.state.keybound;
    var visible = isViewable(this.getDOMNode());
    if(keybound && !visible) {
      this.removeKeyBindings();
    } else if(!keybound && visible) {
      this.addKeyBindings();
    }
  },
  keybindingHandler: function(e) {
      if(e.keyCode === 37) { // left
      this.previous();      
      }
    else if(e.keyCode === 39) { // right
      this.next();
      }
    },
  addKeyBindings: function() {
    $(document).keydown(this.keybindingHandler);
    this.setState({keybound: true});
  },
  removeKeyBindings: function() {
    $(document).unbind("keydown", this.keybindingHandler);
  this.setState({keybound: false});
  },
  next: function() {
    if(this.props.slides.length > this.state.position + 1) {
      this.setState({position: this.state.position+1});
    }
  },
  previous: function() {
    if(this.state.position > 0) {
      this.setState({position: this.state.position-1});
    }
  },
  render: function() {
    var cx = React.addons.classSet;
    var classCheck = {
    
    };
  var classes = cx(classCheck);
  var slide = this.props.slides[this.state.position];
  var title = slide.title;
  var text = "**"+title+"** " + slide.text;
  var image = slide.image;
    return (
      <div className="slideshow">
      <div className="slideshow-text">
      {
      this.state.position > 0 ? 
      (<span className="slideshow-text-previous" 
          onClick={this.previous}>
          Previous
      </span>) 
      : "" 
      }
      {
      this.state.position + 1 < this.props.slides.length ? 
      (<span className="slideshow-text-next" onClick={this.next}>Next</span>) 
      : "" 
      }
      <Post value={text}/>
      </div>
      <div className="slideshow-image">
      {
      this.state.position > 0 ? (<div className="slideshow-image-previous">
      <span onClick={this.previous}>
      <i className="fa fa-angle-left fa-fw"></i>
      </span>
      </div>) : ""
    }
    {
      this.state.position + 1 < this.props.slides.length ?
      (<div className="slideshow-image-next">
      <span onClick={this.next}>
      <i className="fa fa-angle-right fa-fw"></i>
      </span>
      </div>
      
      ) : ""
    }
    <img src={image} alt={title}/>
      </div>
    </div>
    );
  }
});

module.exports = Slideshow;


}());