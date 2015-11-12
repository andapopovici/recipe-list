'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var Actions = require('../constants/actions');

var RecipeActions = {
	getAll: function(nodes) {
		AppDispatcher.handleServerAction({
			type: Actions.RECEIVE_RECIPES,
			rawNodes: nodes
		});
	},

	typeChanged: function(newValue){
		AppDispatcher.handleViewAction({
			type: 'RECIPE_TYPE_DROPDOWN_CHANGED',
			value: newValue
		})
	}
};

module.exports = RecipeActions;