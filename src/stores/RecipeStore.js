'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var Events = require('../constants/events');
var Actions = require('../constants/actions');
var assign = require('object-assign');
var _ = require('lodash');

var _nodes = {};

var RecipeStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(Events.RECIPE_LIST_CHANGE);
  },

  addChangeListener: function(callback) {
    this.on(Events.RECIPE_LIST_CHANGE, callback);
  },

  removeChangeListener: function(callback){
      this.removeListener(Events.RECIPE_LIST_CHANGE, callback);
  },

  get: function(id) {
        var result = _.find(_nodes, function(node){
                        return node.id === +id;
                    });

        return result;
  },

  getAll: function() {
    return _nodes;
  }
});

RecipeStore.dispatchToken = AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.type) {
    case Actions.RECEIVE_RECIPES:
      _nodes = action.rawNodes;
      RecipeStore.emitChange();
      break;
  }

});

module.exports = RecipeStore;
