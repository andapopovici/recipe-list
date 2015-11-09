'use strict';

var React = require('react');

var InputText = React.createClass({
	render: function() {
    return (
			<div className="input-field">
				<label for={this.props.id}>
					{this.props.label}
					<div>
						<input type="text" placeholder={this.props.placeholderText} />
					</div>
				</label>
			</div>
    );
	}
});

module.exports = InputText;
