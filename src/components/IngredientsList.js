'use strict';

var React = require('react');
var Ingredient = require('./ingredient');
var AddToShoppingListButton = require('./AddToShoppingListButton');

var IngredientsList = React.createClass({
	render: function(){
		return (
			<div>
				<p className={"ingredients-title"}> Ingredients </p>
				{
					this.props.items.map(function(item){
						return (
							<div key={item.id} className="ingredient-item">
								<Ingredient key={item.id} item={item} />
							</div>);
					})
				}
			</div>
		);
	}
});

module.exports = IngredientsList;
