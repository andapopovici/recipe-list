'use strict';

var React = require('react');

var InputText = require('./InputText');

var InputTextWithEvents = React.createClass({
	handleClick: function(e) {
		e.preventDefault();
		var parentDiv = e.target.parentNode.parentNode;
		parentDiv.parentNode.removeChild(parentDiv);
  },
	render: function() {
		return (
			<div className="input-field">
				<InputText placeholderText="Ingredient" />
				<InputText placeholderText="Quantity" />
				<a href="" className="delete" onClick={this.handleClick}>
					<i className="fa fa-times"></i>
        </a>
			</div>
		);
	}
});

module.exports = InputTextWithEvents;
