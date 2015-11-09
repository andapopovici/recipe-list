'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;

var MainPage = require('./components/MainPage');
var RecipeWebAPIUtils = require('./utils/RecipeWebAPIUtils');
var routes = require('./routes');

RecipeWebAPIUtils.getAllRecipes();

ReactDOM.render(<Router routes={routes}/>, document.getElementById('app'));
