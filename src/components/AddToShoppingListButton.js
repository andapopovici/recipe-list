'use strict';

var React = require('react');

var AddToShoppingListButton = React.createClass({
	handleClick: function(event){
		event.preventDefault();
		var ingredient = this.props.ingredient;

		// TODO dispatch message
		console.log(ingredient);
	},
	render: function(){
		return (
			<a href="#" onClick={this.handleClick}>
				<i className="fa fa-cart-arrow-down fa-lg"></i></a>
		);
	}
});

module.exports = AddToShoppingListButton;
