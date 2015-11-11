import React from 'react';
var ShoppingListStore = require('../stores/ShoppingListStore');


class ShoppingList extends React.Component {
    constructor(){
        super();
        this.state = {items : []};
    }

    componentDidMount() {
      this.setState({items: this.getFromStore()});
    }

    getFromStore() {
        return ShoppingListStore.get();
    }

    render() {
        return (
            <div>
                <h3> Stuff to buy </h3>
                <div className="ingredients-list">
                    {
                        this.state.items.map(function(item, index){
                            return (
                                    <p key={index}> {item} </p>
                                );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default ShoppingList;