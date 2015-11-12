'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var Actions = require('../constants/actions');

var ModalActions = {
    close: function(){
        AppDispatcher.handleViewAction({
            type: Actions.CLOSE_MODAL
        });
    }
};

module.exports = ModalActions;