'use strict';

var React = require('react');

var Textbox = React.createClass({
	render: function() {
		return (
				<div className="input-field">
					<label for={this.props.id}>
						{this.props.label}
						<textarea id={this.props.id}></textarea>
					</label>
				</div>
		);
	}
});

module.exports = Textbox;
