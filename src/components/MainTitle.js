'use strict';

var React = require('react');

var MainTitle = React.createClass({
	render: function(){
		return (
			<div id='website-header'> <i className={"fa fa-book purple"}></i> Recipe book </div>
		);
	}
});

module.exports = MainTitle;
