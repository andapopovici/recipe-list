'use strict';

var React = require('react');
var Button = require('react-bootstrap').Button;
var MakeCakeModal = require('./MakeCakeModal');

var MakeCakeButton = React.createClass({
	getInitialState: function() {
		return { showModal: false };
	},
	open: function(){
		this.setState({
			showModal: true
		});
		console.log('open ');
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
				<MakeCakeModal show={this.state.showModal} />
			</div>
		);
	}

});

module.exports = MakeCakeButton;
