'use strict';

var React = require('react');
var Modal = require('react-bootstrap').Modal;
var Button = require('react-bootstrap').Button;

var MakeCakeModal = React.createClass({
	getInitialState: function() {
	    return {showModal: this.props.show};
	},

	close: function() {
	    this.setState({ showModal: false });
	},

	open: function() {
	    this.setState({ showModal: true });
	},

	render: function() {
		return (
			<Modal show={this.state.showModal} onHide={this.close}>
				<Modal.Header closeButton>
            		<Modal.Title>Modal heading</Modal.Title>
          		</Modal.Header>
				<Modal.Body>
				    <h4>Text in a modal</h4>
				</Modal.Body>
				<Modal.Footer>
            		<Button onClick={this.close}>Close</Button>
          		</Modal.Footer>
			</Modal>
		);
	}

});

module.exports = MakeCakeModal;
