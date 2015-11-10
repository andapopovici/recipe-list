'use strict';

var React = require('react');
var Link = require("react-router").Link;
const RecipeStore = require('../stores/RecipeStore');

function getAllRecipeData() {
	return {
		nodes: RecipeStore.getAll()
	};
}

class RecipeList extends React.Component {
	constructor() {
		super();
		this.state = getAllRecipeData();
	}

	componentDidMount() {
		RecipeStore.addChangeListener(this._onChange);
	}

	render() {
		return (
			<div>
			{
				this.state.nodes.map((recipe) => {
					return (<div key={recipe.id}>
								<h3 className="title">
									<Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
								</h3>
								<img src={recipe.image} width="220" />
							</div>);
				})
			}
			</div>
		);
	}
	_onChange() {
		this.setState(getAllRecipeData());
	}
}

module.exports = RecipeList;
