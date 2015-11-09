'use strict';

var React = require('react');

var InputTextList = require('./InputTextList');

var InputTextListHandler = React.createClass({
	getInitialState: function() {
		return {fields: []};
	},
	componentDidMount: function() {
    this.setState({fields: this.props.fields});
  },
  handleClick: function(e) {
    e.preventDefault();
    var fields = this.state.fields;

    var newFields = fields.concat([this.props.newField.outerHTML]);
    this.setState({fields: newFields});
  },
  render: function() {
    return (
      <div className="form-element-group">
					<label>
						{this.props.label}
						<InputTextList fields={this.state.fields} />
					</label>
					<a href="void(0);" onClick={this.handleClick}>
						<i className="fa fa-plus-square"></i>
					</a>
      </div>
    );
  }
});

module.exports = InputTextListHandler;
