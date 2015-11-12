'use strict';

import React from 'react';
const RecipeType = require('./RecipeType');

class RecipeSearch extends React.Component {
    constructor() {
        super();
    }

	render() {
        return (
            <div className="searchable">
                <h2>Search</h2>
                <RecipeType />
            </div>
        )
    }
}

module.exports = RecipeSearch;
