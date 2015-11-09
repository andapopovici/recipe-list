'use strict';

var React = require('react');

var InputTextWithEvents = require('./InputTextWithEvents');

var InputTextList = React.createClass({
	render: function() {
    return (
			<div className="field-list field-input input-small">
			{
				this.props.fields.map(function () {
					return (
						<InputTextWithEvents />
					);
				})
			}
			</div>
    );
	}
});

module.exports = InputTextList;
