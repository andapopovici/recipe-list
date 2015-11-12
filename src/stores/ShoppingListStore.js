'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var Actions = require('../constants/actions');
var Events = require('../constants/events');
var _ = require('lodash');

var shoppingList = [];

var ShoppingListStore = assign({}, EventEmitter.prototype, {
	get: function(){
		return shoppingList;
	},

	addToList: function(items){
		// union merges the 2 lists without having duplicates
		if (items){
			shoppingList = _.union(shoppingList, items);
			this.emitChange();
		}
	},

	emitChange: function() {
		this.emit(Events.SHOPPING_LIST_CHANGE);
	},

	addChangeListener: function(callback) {
		this.on(Events.SHOPPING_LIST_CHANGE, callback);
	},

	removeChangeListener: function(callback){
		this.removeListener(Events.SHOPPING_LIST_CHANGE, callback);
	}
});


ShoppingListStore.dispatchToken = AppDispatcher.register(function(payload) {
	var action = payload.action;

	switch(action.type) {
		case Actions.ADD_TO_SHOPPING_LIST:
			ShoppingListStore.addToList(action.ingredients);
			break;
	}
});

module.exports = ShoppingListStore;
