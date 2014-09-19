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
        <p>Email me when 
        <span className="entry-footer-notify-names">
            {authorNames.join(" " +String.fromCharCode(38) +" ")}
            </span> post{authorNames.length > 1 ? "" : "s"}
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
