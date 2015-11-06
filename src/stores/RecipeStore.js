'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');

var CHANGE_EVENT = 'change';

var _nodes = {};

var RecipeStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
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

    case "RECEIVE_RECIPES":
      _nodes = action.rawNodes;
      RecipeStore.emitChange();
      break;
    default:

  }

});

module.exports = RecipeStore;
