'use strict';

var React = require('react');
var Button = require('react-bootstrap').Button;
var MakeCakeModal = require('./MakeCakeModal');
var ModalStateStore = require('../stores/ModalStateStore');

var MakeCakeButton = React.createClass({
	getInitialState: function() {
		return { showModal: false };
	},

	componentDidMount: function(){
		ModalStateStore.addChangeListener(this.handleModalClosed);
	},

	handleModalClosed: function(){
		this.setState({showModal: false});
	},
	open: function(){
		this.setState({
			showModal: true
		});
	},

	render: function() {
		return (
			<div>
				<Button
					bsStyle="success"
					bsSize="large"
					className="make-cake-btn"
					onClick={this.open}>
					Make this cake!
				</Button>

				<MakeCakeModal show={this.state.showModal} ingredients={this.props.ingredients}/>
			</div>
		);
	}

});

module.exports = MakeCakeButton;
