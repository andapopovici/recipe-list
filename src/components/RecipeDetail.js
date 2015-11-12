'use strict';

var React = require('react');
var IngredientsList = require('./IngredientsList');
var RecipeStore = require('../stores/RecipeStore');
var MakeCakeButton = require('./MakeCakeButton');
var ShoppingListStore = require('../stores/ShoppingListStore');
var Alert = require('react-bootstrap').Alert;

function getDetail(id){
	return {recipe: RecipeStore.get(id)};
}

var RecipeDetail = React.createClass({
	getInitialState: function(){
		var recipeId = this.props.params.id;

		var state = getDetail(recipeId);
		state.alertVisible = false;

		return state;
	},
	componentDidMount: function() {
		RecipeStore.addChangeListener(this._onChange);
		ShoppingListStore.addChangeListener(this._onShoppingListChange);
	},
	render: function(){
		return (
			<div>
				{(() => {
					if (this.state.alertVisible) {
						return(<Alert bsStyle="success" onDismiss={this.handleAlertDismiss} dismissAfter={2000}>
									<p>Shopping list updated!</p>
								</Alert>);
					}}
				)()}
				<div className="recipe-detail-wrapper">
					<h3 className="title">{this.state.recipe.name}</h3>
					<div className="recipe-detail-body">
						<IngredientsList items={this.state.recipe.ingredients} /> <br />
						<p>{this.state.recipe.description}</p>
					</div>
					<img src={this.state.recipe.image} className={"recipe-detail-img"}/>
				</div>
				<MakeCakeButton ingredients={this.state.recipe.ingredients} />

			</div>
		);


	},
	_onChange: function() {
		var recipeId = this.props.params.id;
		this.setState(getDetail(recipeId));
	},
	_onShoppingListChange: function(){
		this.handleAlertShow();
	},

	handleAlertDismiss() {
		this.setAlertVisible(false);
	},

	handleAlertShow() {
		this.setAlertVisible(true);
	},

	setAlertVisible(visible){
		var state = this.state;
		state.alertVisible = visible;

		this.setState(state);
	}
});

module.exports = RecipeDetail;
