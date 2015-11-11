'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var Actions = require('../constants/actions');

var RecipeActions = {
	getAll: function(nodes) {
		AppDispatcher.handleServerAction({
			type: Actions.RECEIVE_RECIPES,
			rawNodes: nodes
		});
	}
};

module.exports = RecipeActions;