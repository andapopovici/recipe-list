'use strict';

var React = require('react');
var SideNav = require('react-sidenav');
var MainTitle = require('./MainTitle');
var AddRecipe = require('./AddRecipe');
var RecipeList = require('./RecipeList');
var RecipeDetail = require('./RecipeDetail');
var RouteHandler = require('react-router').RouteHandler;

var nav = [
        {key: 'recipes', title: 'All recipes', 'iconClassName': 'fa fa-cutlery'},
        {key: 'add', title: 'Add new', 'iconClassName': 'fa fa-plus-circle'},
		{key: 'shoppinglist', title: 'Shopping list', 'iconClassName': 'fa fa-check-square'}
    ];

var MainPage = React.createClass({
	render: function() {
		return (
			<div>
				<div id="sidenav-wrapper">
					<SideNav className={"sidenav"} itemType="righticon" navigation={nav} path="#"></SideNav>
				</div>
				<div id="right-page-content">
					<MainTitle />
					<div id="page-content">
						<RouteHandler />
					</div>
				</div>
			</div>
		);
	}
});

module.exports = MainPage;
