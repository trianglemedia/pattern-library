/** @jsx React.DOM */
(function() {
"use strict";
var React = require('react/addons');

var Author = require('../user/link.jsx');


var EntryHeader = React.createClass({
  render: function() {
    return (
      <header className="entry-header">
    
    <figure className="entry-header-hero"
        data-picture="" data-alt="">
        <img alt="" src="/images/cara.jpg"/>
    </figure>
                                
    <h1 className="entry-header-title">Cara Delevingne Has Enormous Eyes</h1>
                
    <p className="entry-header-details">
        <span className="entry-header-details-author">
        by <Author name="Clementine"/>
        </span>
        <time className="entry-header-details-time pubdate updated"
            datetime="2013-12-04T08:00:29-05:00">
            December 04, 2013
        </time>
        <span className="entry-header-details-sub">
        <span className="entry-header-details-filed">
            Filed under <a href="/topic/layout-grids">
            Celebrities
            </a>,
            <a href="/topic/mobile-multidevice">Fashion</a>
            </span>
            <span className="entry-header-details-comments">
            <a className="comment-count" href="#comments">23 Comments</a></span>
        </span>
    </p>
                
</header>
    );
  }
});

module.exports = EntryHeader;

}());