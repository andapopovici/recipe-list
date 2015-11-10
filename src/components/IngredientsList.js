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
						return (
							<div key={item.id}>
								<Ingredient key={item.id} item={item} />
							</div>);
					})
				}
			</div>
		);
	}
});

module.exports = IngredientsList;
