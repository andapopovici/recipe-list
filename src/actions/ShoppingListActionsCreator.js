'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var Actions = require('../constants/actions');

var ShoppingListActions = {
	addToList: function(ingredients){
		AppDispatcher.handleViewAction({
			type: Actions.ADD_TO_SHOPPING_LIST,
			ingredients: ingredients
		});
	}
};

module.exports = ShoppingListActions;
