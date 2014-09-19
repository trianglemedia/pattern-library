/** @jsx React.DOM */
(function() {
"use strict";
var React = require('react/addons');

var Author = require('../user').Author;

var ShareButton = require('../share').Button;

var Preview = React.createClass({
  render: function() {
    return (
      <div className="entry-preview">
        <div className="entry-preview-image">
        <img src="/scout.jpg"/>
        </div>
        <div className="entry-preview-info">
        <h2>{this.props.title}</h2>
        <div className="entry-preview-info-author">
        <Author name="Clementine"/>
        </div>
        <div className="entry-preview-info-share">
        <div className="entry-preview-info-share-button">
        <ShareButton type="facebook"/>
        </div>
        <div className="entry-preview-info-share-button">
        <ShareButton type="twitter"/>
        </div>
        <div className="entry-preview-info-share-button">
        <ShareButton type="pinterest"/>
        </div>
        </div>
        <div className="entry-preview-info-content">
        <p>
        Kif might! It's just like the story of the grasshopper and the octopus. 
        All year long, the grasshopper kept burying acorns for winter,
        while the octopus mooched off 
        his girlfriend and watched TV. But then the winter came, and 
        the grasshopper died, and the octopus
        ate all his acorns. Also he got a race car. Is any of this
        getting through to you? In your time, yes,
        but nowadays shut up! Besides, these are adult stemcells, 
        harvested from perfectly healthy adults 
        whom I killed for their stemcells. Why would a robot need to drink?
        </p>
        </div>
        </div>
      </div>
    );
  }
});

module.exports = Preview;

}());