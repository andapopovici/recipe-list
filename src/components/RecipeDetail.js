'use strict';

var React = require('react');
var IngredientsList = require('./IngredientsList');
var RecipeStore = require('../stores/RecipeStore');


function getDetail(id){
	return {recipe: RecipeStore.get(id)};
}

var RecipeDetail = React.createClass({
	getInitialState: function(){
		var recipeId = this.props.params.id;
		return getDetail(recipeId);
	},
	componentDidMount: function() {
		RecipeStore.addChangeListener(this._onChange);
	},
	render: function(){
		return (
			<div>
				<h3 className={"title"}>{this.state.recipe.name}</h3>
				<div className={"recipe-detail-body"}>
					<IngredientsList items={this.state.recipe.ingredients} /> <br />
					<p>{this.state.recipe.description}</p>
				</div>
				<img src={this.state.recipe.image} className={"recipe-detail-img"}/>
			</div>
		);
	},
	_onChange: function() {
		var recipeId = this.props.params.id;
		this.setState(getDetail(recipeId));
	}
});

module.exports = RecipeDetail;
