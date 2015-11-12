'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var Events = require('../constants/events');
var Actions = require('../constants/actions');
var assign = require('object-assign');
var _ = require('lodash');

var _nodes = {};

var RecipeStore = assign({}, EventEmitter.prototype, {

<<<<<<< HEAD
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
=======
  emitChange: function() {
    this.emit(Events.RECIPE_LIST_CHANGE);
  },

  addChangeListener: function(callback) {
    this.on(Events.RECIPE_LIST_CHANGE, callback);
  },

  removeChangeListener: function(callback){
      this.removeListener(Events.RECIPE_LIST_CHANGE, callback);
  },
>>>>>>> 20cc4b3ae403cb433e861daf949a4b65209f2ba9

    get: function (id) {
        var result = _.find(_nodes, function (node) {
            return node.id === +id;
        });

        return result;
    },

    getByType: function (type) {
        var results = _.filter(_nodes, function (node) {
            return node.type === type;
        });
        return results;
    },

    getAll: function () {
        return _nodes;
    }
});

RecipeStore.dispatchToken = AppDispatcher.register(function (payload) {
    var action = payload.action;

<<<<<<< HEAD
    switch (action.type) {

        case "RECEIVE_RECIPES":
            _nodes = action.rawNodes;
            RecipeStore.emitChange();
            break;
        default:

    }
=======
  switch(action.type) {
    case Actions.RECEIVE_RECIPES:
      _nodes = action.rawNodes;
      RecipeStore.emitChange();
      break;
  }
>>>>>>> 20cc4b3ae403cb433e861daf949a4b65209f2ba9

});

module.exports = RecipeStore;
