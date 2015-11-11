var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var Events = require('../constants/events');
var Actions = require('../constants/actions');
var assign = require('object-assign');


var ModalStateStore = assign({}, EventEmitter.prototype, {
    emitChange: function() {
        this.emit(Events.MODAL_CLOSED);
    },

    addChangeListener: function(callback) {
        this.on(Events.MODAL_CLOSED, callback);
    },

    removeChangeListener: function(callback){
        this.removeListener(Events.MODAL_CLOSED, callback);
    }
});


ModalStateStore.dispatchToken = AppDispatcher.register(function(payload) {
    var action = payload.action;

    switch(action.type) {
        case Actions.CLOSE_MODAL:
            ModalStateStore.emitChange();
            break;
    }
});

module.exports = ModalStateStore;