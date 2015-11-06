var React = require('react');
var Route = require('react-router').Route;
var DefaultRoute = require('react-router').DefaultRoute;
// include all the components that are used in routes
var AddRecipe = require('./components/AddRecipe');
var MainPage = require('./components/MainPage');
var RecipeList = require('./components/RecipeList');
var RecipeDetail = require('./components/RecipeDetail');


var routes = (
	<Route name="mainPage" path="/" handler={MainPage}>
		<DefaultRoute handler={RecipeList} />
		<Route name="recipes" handler={RecipeList} />
		<Route name="add" handler={AddRecipe} />
		<Route name="recipeDetail" path="/recipes/:id" handler={RecipeDetail} />
	</Route>
);

module.exports = routes;
