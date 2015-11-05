'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');

var RecipeActions = {
	getAll: function(nodes) {
		AppDispatcher.handleServerAction({
			type: "RECEIVE_RECIPES",
			rawNodes: nodes
		});
	}
};

module.exports = RecipeActions;