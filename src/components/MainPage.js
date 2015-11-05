'use strict';

var React = require('react');
var SideNav = require('react-sidenav');
var MainTitle = require('./MainTitle');
var AddRecipe = require('./AddRecipe');
var RecipeList = require('./RecipeList');

var nav = [
        {key: 'recipes', title: 'All recipes', 'iconClassName': 'fa fa-cutlery'},
        {key: 'add', title: 'Add new', 'iconClassName': 'fa fa-plus-circle'},
		{key: 'shoppinglist', title: 'Shopping list', 'iconClassName': 'fa fa-check-square'}
    ];

var MainPage = React.createClass({

	getInitialState: function() {
		return {
			route: window.location.hash.substr(1)
		};
	},
	componentDidMount: function() {
		var that = this;
		window.addEventListener('hashchange', function() {
			that.setState({
				route: window.location.hash.substr(1)
			});
		});
	},
	render: function() {
		var PageContent;
		switch (this.state.route) {
			case '/add':
				PageContent = AddRecipe;
				break;
			case '/recipes':
				PageContent = RecipeList;
				break;
			default:
				PageContent = RecipeList;
		}
		
		return (
			<div>
				<div id="sidenav-wrapper">
					<SideNav className={"sidenav"} itemType="righticon" navigation={nav} path="#"></SideNav>
				</div>
				<div id="right-page-content">
					<MainTitle />
					<div id="page-content">
						<PageContent />
					</div>
				</div>
			</div>
		);
	}
});

module.exports = MainPage;
