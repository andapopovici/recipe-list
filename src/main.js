'use strict';

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');
var MainPage = require('./components/MainPage');
var RecipeWebAPIUtils = require('./utils/RecipeWebAPIUtils');

RecipeWebAPIUtils.getAllRecipes();

Router.run(routes, function(Handler) {
    React.render(<Handler />, document.getElementById('app'));
});
