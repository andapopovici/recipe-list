var React = require("react");

var ReactDOM = require('react-dom');
var Router = require('react-router').Router;

var MainPage = require('./components/MainPage');
var RecipeWebAPIUtils = require('./utils/RecipeWebAPIUtils');
var routes = require('./routes');

RecipeWebAPIUtils.getAllRecipes();

ReactDOM.render(<Router routes={routes}/>, document.getElementById('app'));