var React = require('react');
var MainPage = require('./components/MainPage');
var RecipeWebAPIUtils = require('./utils/RecipeWebAPIUtils');

RecipeWebAPIUtils.getAllRecipes();

React.render(<MainPage />, document.getElementById('app'));

console.log("^^^^^^THIS IS NOT AN ERROR^^^^^^");