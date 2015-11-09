'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var Actions = require('../constants/actions');

var shoppingList = [];

var ShoppingListStore = assign({}, EventEmitter.prototype, {
	addToList: function(items){
		if (items){
			// if we got an array of items,
			// we need to merge with our list
			if (items.constructor === Array){
				shoppingList = shoppingList.concat(items);
			} else {
				// just one item, simply push to list
				shoppingList.push(items);
			}
		}
	}
});


ShoppingListStore.dispatchToken = AppDispatcher.register(function(payload) {
	var action = payload.action;

	switch(action.type) {
		case Actions.ADD_TO_SHOPPING_LIST:
			ShoppingListStore.addToList(action.items);
	}
});

module.exports = ShoppingListStore;
