import React from 'react';
import {Input} from 'react-bootstrap';
let Ingredient = require('./Ingredient');

class SelectableIngredientsList extends React.Component {
  render() {
    return (
        <div>
        {
            this.props.ingredients.map(function(item){
            return (
                <div key={item.id}>
                    <Input type="checkbox" label={item.name} />
                </div>);
            })
        }
        </div>
    );
  }
}

export default SelectableIngredientsList;
