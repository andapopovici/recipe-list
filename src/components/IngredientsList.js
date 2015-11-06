'use strict';

var React = require('react');
var Ingredient = require('./ingredient');

var IngredientsList = React.createClass({
	render: function(){
		return (
			<div>
				<p className={"ingredients-title"}> Ingredients </p>
				{
					this.props.items.map(function(item){
						return <Ingredient key={item.id} item={item} />;
					})
				}
			</div>
		);
	}
});

module.exports = IngredientsList;
