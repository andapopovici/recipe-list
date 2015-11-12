'use strict';

import React from 'react';
var RecipeActions = require('../../actions/RecipeActionsCreator');

const DROPDOWN_CHANGE_EVENT = 'DROPDOWN_CHANGE_EVENT';

class DropDown extends React.Component {

    constructor() {
        super();
        this.state = {};
        this.render = this.render.bind(this);
        this.onFormChange = this.onFormChange.bind(this);
    }

    render() {
        var options = [];

        if (this.props.options) {
            options.push(<option value="-1"> - Select - </option>);

            this.props.options.forEach((option) => {
                options.push(<option key={option.id} value={option.name} selected={option.name === this.props.currentValue}>{option.name}</option>);
            });
        }

        return (
            <select ref="dd" value={this.state.value ? this.state.value : ''} onChange={this.onFormChange}>
                {options}
            </select>
        )
    }

    onFormChange() {
        const currentNode = React.findDOMNode(this.refs.dd);
        var val = currentNode.value;
        this.setState({value: val});
        this.props.dropDownValueChanged(val);
        RecipeActions.typeChanged(val);
    }
}

export default DropDown;
