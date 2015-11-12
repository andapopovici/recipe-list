'use strict';

var React = require('react');
var Modal = require('react-bootstrap').Modal;
var Button = require('react-bootstrap').Button;
var ShoppingListActions = require('../actions/ShoppingListActionsCreator');
var ModalActions = require('../actions/ModalActionsCreator');

import SelectableIngredientsList from './SelectableIngredientsList';

var MakeCakeModal = React.createClass({

	getInitialState: function() {
	    return {showModal: this.props.show};
	},

	close: function() {
		ModalActions.close();
	},

	componentWillReceiveProps:function(nextProps){
		this.setState({showModal: nextProps.show });
	},

	save: function(){
		var ingredientsToAdd = this.refs.list.getShoppingList();
		ShoppingListActions.addToList(ingredientsToAdd);
		this.close();
	},

	render: function() {
		return (
			<Modal show={this.state.showModal} onHide={this.close}>
				<Modal.Header className="modal-header" closeButton>
            		<Modal.Title>Ingredients</Modal.Title>
          		</Modal.Header>
				<Modal.Body>
				    <h4>Select the ingredients you need</h4>
					<SelectableIngredientsList ingredients={this.props.ingredients} ref="list" />
				</Modal.Body>
				<Modal.Footer>
					<Button bsStyle="success" onClick={this.save}><i className="fa fa-shopping-cart"></i> Add to shopping list </Button>
					<Button bsStyle="danger" onClick={this.close}>Close</Button>
          		</Modal.Footer>
			</Modal>
		);
	}

});

module.exports = MakeCakeModal;
