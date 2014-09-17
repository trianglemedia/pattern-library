/** @jsx React.DOM */
var React = require('react/addons');

var Card = require('../user').Card;


var EntryFooter = React.createClass({
  render: function() {
    console.log(this.props.authors);
    return (
        <footer className="entry-footer">
        {

            this.props.authors.map(function(author) {
                return (
                    <div className="entry-footer-author">   
                    <Card name={author.name}/>        
                    </div>);
            })
        }
        </footer>
    );
  }
});

module.exports = EntryFooter;
