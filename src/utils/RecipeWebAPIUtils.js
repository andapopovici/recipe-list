'use strict';

var RecipeActionsCreator = require('../actions/RecipeActionsCreator');

var	readJsonData = function() {
	var request = new XMLHttpRequest();
	request.open("GET", "../data/RecipeList.json", false);
	request.send(null);
	
	return JSON.parse(request.responseText);
};

var RecipeAPI = {
	getAllRecipes: function() {
		RecipeActionsCreator.getAll(readJsonData());
	}	
};

module.exports = RecipeAPI;