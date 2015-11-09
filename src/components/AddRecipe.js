'use strict';

var React = require('react');

var InputText = require('./html/InputText');
var InputTextListHandler = require('./html/InputTextListHandler');
var Textbox = require('./html/Textbox');

var AddRecipe = React.createClass({
	render: function() {
		var fieldList = [];
    fieldList.push('<InputTextWithEvents />');

    return (
      <div className="input-list">
				<h1>Add Recipe</h1>
				<InputText id="name" label="Name" />
				<InputText id="image" label="Image" />
				<Textbox id="description" label="Method" />
        <InputTextListHandler label="Ingredients List" fields={fieldList} newField={document.createElement("InputTextWithEvents")} />
      </div>
    );
	}
});

module.exports = AddRecipe;
