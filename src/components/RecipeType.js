'use strict';

var React = require('react')
import DropDown from './html/DropDown';

const RecipeTypeOptions = [
    {name: "Baking" },
    {name: "Other" }
]

class RecipeType extends React.Component {
    constructor() {
        super();
        this.currentValue = null;
        this.render = this.render.bind(this);
    }

	render() {
        return (
            <div className="form-element-group">
                <label for="Type">
                    Type
                    <DropDown id="Type" options={RecipeTypeOptions} dropDownValueChanged={this.onTypeChanged} currentValue={this.currentValue} />
                </label>
            </div>
        )
    }

    onTypeChanged(type) {
        console.log(type);

    }
}

module.exports = RecipeType;
