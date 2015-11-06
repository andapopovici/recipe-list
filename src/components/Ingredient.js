'use strict';

var React = require('react');

var Ingredient = React.createClass({
	render: function(){
		return (
			<div className={"ingredient"}>
				{this.props.item.quantity} {this.props.item.name}
			</div>
		);
	}
});

module.exports = Ingredient;
