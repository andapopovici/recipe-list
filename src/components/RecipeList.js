'use strict';

var React = require('react');
var Link = require("react-router").Link;
const RecipeStore = require('../stores/RecipeStore');
const DropDownEventEmitter = require('../utils/DropdownEventEmitter');
const RecipeSearch = require('./RecipeSearch');

function getAllRecipeData() {
	return {
		nodes: RecipeStore.getAll()
	};
}

function getRecipesByType(type) {
	return {
		nodes: RecipeStore.getByType(type)
	};
}

class RecipeList extends React.Component {
	constructor() {
		super();
		this.state = getAllRecipeData();
		this._dropDownChange = this._dropDownChange.bind(this);
	}

	componentDidMount() {
		RecipeStore.addChangeListener(this._onChange);
		DropDownEventEmitter.addChangeListener(this._dropDownChange);
	}

	render() {
		return (
			<div>
				<RecipeSearch />
				{
					this.state.nodes.map((recipe) => {
						return (
							<div className="recipe-list-item" key={recipe.id}>
								<div className="recipe-list-item-main left">
									<h3 className="title">
										<Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
									</h3>
									<article>
										{recipe.description}
									</article>
								</div>
								<img src={recipe.image} width="220" />
								<div className="clear"></div>
							</div>
						);
					})
				}
			</div>
		);
	}

	_onChange() {
		this.setState(getAllRecipeData());
	}

	_dropDownChange(value){
		console.log("_dropDownChange "+value);

		if (value !== "-1"){
			this.setState(getRecipesByType(value));
		}
		else {
			this.setState(getAllRecipeData());
		}
	}
}

module.exports = RecipeList;
