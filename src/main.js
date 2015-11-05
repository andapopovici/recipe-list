var React = require('react');
var MainPage = require('./components/MainPage');
var RecipeWebAPIUtils = require('./utils/RecipeWebAPIUtils');

RecipeWebAPIUtils.getAllRecipes();

React.render(<MainPage />, document.getElementById('app'));
