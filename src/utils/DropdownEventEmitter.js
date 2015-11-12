'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');

var CHANGE_EVENT = 'dropdown_changed';

var DropdownEventEmitter = assign({}, EventEmitter.prototype, {

    emitChange: function (value) {
        this.emit(CHANGE_EVENT, value);
    },

    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

DropdownEventEmitter.dispatchToken = AppDispatcher.register(function (payload) {
    var action = payload.action;

    switch (action.type) {

        case "RECIPE_TYPE_DROPDOWN_CHANGED":
            DropdownEventEmitter.emitChange(action.value);
            break;
        default:

    }

});
module.exports = DropdownEventEmitter;
