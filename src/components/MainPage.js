'use strict';

var React = require('react');
var SideNav = require('react-sidenav');
var MainTitle = require('./MainTitle');
var RecipeList = require('./RecipeList');

var nav = [
        {key: 'recipes', title: 'All recipes', 'iconClassName': 'fa fa-cutlery'},
        {key: 'add', title: 'Add new', 'iconClassName': 'fa fa-plus-circle'},
		{key: 'shoppinglist', title: 'Shopping list', 'iconClassName': 'fa fa-check-square'}
    ];

var MainPage = React.createClass({
	render: function() {
		var PageContent;
		PageContent = RecipeList;
		return (
			<div>
				<MainTitle />
				<div id="sidenav-wrapper">
					<SideNav className={"sidenav"} itemType="righticon" itemHeight="32px" navigation={nav}></SideNav>
				</div>
				<div id="page-content">
					<PageContent />
				</div>
			</div>
		);
	}
});

module.exports = MainPage;
