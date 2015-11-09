var React = require('react');
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
// include all the components that are used in routes
var AddRecipe = require('./components/AddRecipe');
var MainPage = require('./components/MainPage');
var RecipeList = require('./components/RecipeList');
var RecipeDetail = require('./components/RecipeDetail');


var routes = (
	<Route path="/" component={MainPage}>
		<IndexRoute component={RecipeList} />
		<Route path="recipes" component={RecipeList} />
		<Route path="add" component={AddRecipe} />
		<Route path="/recipes/:id" component={RecipeDetail} />
	</Route>
);

module.exports = routes;
