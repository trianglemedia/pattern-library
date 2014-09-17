/** @jsx React.DOM */
var React = require('react');
var $ = require('jquery');
var patterns = require('../patterns/patterns');
var components = patterns.components;
var SideNav = components.SideNav;
var Swatch = components.Swatch;
var GridRow = components.GridRow;
var GridColumn = components.GridColumn;
var Slug = components.Slug;
var Button = components.button.Button;
var ButtonGroup = components.button.Group;
var UserLink = components.user.Link;
var UserCard = components.user.Card;
var UserAvatar = components.user.Avatar;
var EntryHeader =components.entry.Header;
var EntryFooter =components.entry.Footer;


patterns.initialize();

var Gallery = React.createClass({
    render: function() {
        return (<div>
         {
          this.props.patterns.map(function(pattern) {
            var key  = "pattern-"+pattern.name;
        return <div key={key} className="pattern">
        <div className="pattern-details">
        <a name={pattern.name.toLowerCase()}></a>
        <h2 data-tpl-magellan-location={pattern.name.toLowerCase()} className="pattern-name">{pattern.name}</h2>
        </div>
        <div className="pattern-display">
        {pattern.component}
        </div>
        </div>;
    })
    }
    </div>)
        ;
    }
});

var swatchPattern = {
    name: "Swatches",
    component: <ul className="swatch-set horizontal">
        <li><Swatch color="text"/> </li>
        <li><Swatch color="link"/> </li>
        <li><Swatch color="accent-1"/> </li>
        <li><Swatch color="accent-2"/> </li>
        <li><Swatch color="fill"/> </li>
        </ul>
}

var TypeDisplay = React.createClass({
    getInitialState: function() {
    return {fontFamily: "?", fontSize: 0, element: $("body")};
    },
    componentDidMount: function() {
        var element = $(this.getDOMNode()).find("p");
        var fontFamily = element.css("font-family");
        this.setState({fontFamily: fontFamily, fontSize: element.css("font-size"), element: $(this.getDOMNode())})
    },
    render: function() {
        var classes = "type-"+this.props.type;
        var smallClasses = classes+ " type-small";
        var mediumClasses = classes+" type-medium";
        var largeClasses = classes+ " type-large";
        return <div>
        <h3>{this.props.name}</h3>
        <p className={classes}>
        Font: {this.state.fontFamily}
        </p>
        <p className={smallClasses}>
        Small: {this.state.element.find(".type-small").css("font-size")}
        </p>
        <p className={mediumClasses}>
        Medium: {this.state.element.find(".type-medium").css("font-size")}
        </p>
        <p className={largeClasses}>
        Large: {this.state.element.find(".type-large").css("font-size")}
        </p>
        </div>;
    }
});

var typePattern = {
    name: "Typography",
    component: <div>
    <TypeDisplay type="serif" name="Serif"/>
    <TypeDisplay type="sans-serif" name="Sans-serif"/>
    <TypeDisplay type="mono" name="Monospace"/>
    </div>
}

var slugPattern = {
    name: "Slugs",
    component: <div>
    <Slug>Triangle is your best friend.</Slug>
    </div>
}

var buttonPattern = {
    name: "Buttons",
    about: "Regular buttons are #.  Primary buttons are #.",
    component: <div>
    <h3>Regular</h3>
    <Button text="Button" primary/>
    <Button text="Button" primary small/><br/>
    <Button text="Button"/>
    <Button text="Button" small/>
    <h3>Loading</h3>
    <Button text="Loading" primary loading/>
    <Button text="Loading" primary loading small/><br/>
    <Button text="Loading" loading/>
    <Button text="Loading" loading small/>
    <h3>Combo</h3>
    <Button text="Combo" primary combo/>
    <Button text="Combo" primary combo small/><br/>
    <Button text="Combo" combo/>
    <Button text="Combo" combo small/>
    <h3>Grouped</h3>
    <ButtonGroup primary >
    <Button text="Left"/>
    <Button text="Middle"/>
    <Button text="Right"/>
    </ButtonGroup>
    <ButtonGroup primary small>
    <Button text="Left"/>
    <Button text="Middle"/>
    <Button text="Right"/>
    </ButtonGroup><br/>
    <ButtonGroup>
    <Button text="Left"/>
    <Button text="Middle"/>
    <Button text="Right"/>
    </ButtonGroup>
    <ButtonGroup small>
    <Button text="Left"/>
    <Button text="Middle"/>
    <Button text="Right"/>
    </ButtonGroup>
    </div>
};

var userPattern = {
    name: "User",
    about: "",
    component: <div>
    <h3>Link</h3>
    <div className="pattern-section">
    <UserLink name="Clementine"/>
    </div>
    <h3>Avatar</h3>
    <div className="pattern-section">
    <UserAvatar name="Clementine"/>
    </div>
    <h3>Card</h3>
    <div className="pattern-section">
    <UserCard name="Clementine"/>
    </div>
    </div>
}

var author = [{name:"Clementine"}];
var twoAuthors = [{name:"Clementine"}, {name:"Scout"}];

var entryPattern = {
    name: "Entry",
    about: "",
    component: <div>
    <h3>Header</h3>
    <EntryHeader/>
    <h3>Footer</h3>
    <h4>Single Author</h4>
    <EntryFooter authors={author}/>
    <h4>Multiple Authors</h4>
    <EntryFooter authors={twoAuthors}/>

    </div>
};

var allPatterns = [swatchPattern, typePattern, slugPattern, buttonPattern, userPattern, entryPattern];


$(document).ready(function () {

   var nav = $.map(allPatterns, function(pattern) {
    return {
        name: pattern.name
    }
   });


    React.renderComponent(
        <SideNav items={nav} magellan/>
        ,
        document.getElementById("gallery-nav")
        );

    React.renderComponent(
        <Gallery patterns={allPatterns}/>
        ,
        document.getElementById("gallery-patterns")
    );
});