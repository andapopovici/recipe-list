'use strict';

var React = require('react');
var Button = require('react-bootstrap').Button;

var MakeCakeButton = React.createClass({
	getInitialState: function() {
		return { showModal: false };
	},
	render: function() {
		return (
			<Button
				bsStyle="success"
				bsSize="large"
				onClick={this.open}>
				Make this cake!
			</Button>
		);
	}

});

module.exports = MakeCakeButton;
