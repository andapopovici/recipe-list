'use strict';

var React = require('react');
var RecipeStore = require('../stores/RecipeStore');

function getAllRecipeData() {
	return {
		nodes: RecipeStore.getAll()
	};
}

var RecipeList = React.createClass({
	getInitialState: function(){
		return getAllRecipeData();
	},
	componentDidMount: function() {
		RecipeStore.addChangeListener(this._onChange);
	},
	render: function(){
		return (
			<div>
			{
				this.state.nodes.map(function(recipe) {
					return (<div><h1>{recipe.name}</h1><img src={recipe.image} width="220" /></div>);
				})
			}
			</div>
		);
	},
	_onChange: function() {
		this.setState(getAllRecipeData());
	}
});

module.exports = RecipeList;
