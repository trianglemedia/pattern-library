/** @jsx React.DOM */
(function() {
"use strict";
var React = require('react/addons');

var Card = require('../user').Card;


var EntryFooter = React.createClass({
  render: function() {
    var authorNames = this.props.authors.map(function(author) {
        return author.name;
    });
    var allAuthorNames = authorNames[0];
    for(var i = 1; i < authorNames.length; i+=1) {
        if(authorNames.length > 2) {
            allAuthorNames += ", ";
        }
        if(i+1 >= authorNames.length) {
            //String.fromCharCode(38)
            allAuthorNames += "and ";
        }
        allAuthorNames += authorNames[i];
    }
    return (
        <footer className="entry-footer">
        <div className="entry-footer-authors">
        {

            this.props.authors.map(function(author) {
                var key = "author-"+ author.name;
                return (
                    <div key={key} className="entry-footer-author">   
                    <Card name={author.name}/>        
                    </div>);
            })
        }
        </div>
        <div className="entry-footer-notify">
        <p>Email me when <span 
            className="entry-footer-notify-names">
            {allAuthorNames}
            </span> post{authorNames.length > 1 ? " together" : "s"}
        </p>
        <form>
        <input type="text" placeholder="Email"/>
        <input type="submit" value="Follow"/>
        </form>
        </div>
        </footer>
    );
  }
});

module.exports = EntryFooter;

}());
