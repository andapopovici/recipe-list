import React from 'react';
import {Input} from 'react-bootstrap';

class SelectableIngredientsList extends React.Component {
    constructor(props) {
        super(props);
        this.shoppingList = [];
        this.render = this.render.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // called when an ingredient checkbox's state changes
    handleChange(event){
        let checked = event.target.checked;
        let ingredient = event.target.value;
        let itemIndex = this.shoppingList.indexOf(ingredient);

        // if selected and it's not in the list, add it
        if (checked && itemIndex === -1){
            this.shoppingList.push(ingredient);
        }

        // if unselected and in list, remove it
        if (!checked && itemIndex > -1) {
            this.shoppingList.splice(itemIndex, 1);
        }
    }

    getShoppingList(){
        return this.shoppingList;
    }

    render(){
        return (
            <div>
            {
                this.props.ingredients.map((item) => {
                    return (
                        <div key={item.id}>
                            <Input type="checkbox" label={item.name} value={item.name} onChange={this.handleChange}/>
                        </div>);
                    })
            }
            </div>
        );
    }
}

export default SelectableIngredientsList;
