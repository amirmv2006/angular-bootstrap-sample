var myModule = angular.module('AMV',
    [
        'ngRoute',
        'ngAnimate',
        'ngMessages',
        'CRUD',
        'HomePage',
        'Book'
    ]);
myModule.config(function($httpProvider, $provide, $stateProvider, $urlRouterProvider) {

    //redirect if the router is unspecified
    $urlRouterProvider.otherwise('/');

    var homeState = {
        name: 'home',
        url: '/',
        templateUrl: 'amv/homepage/tmpl/HomePage.html'
    };
    var bookListState = {
        name: 'bookList',
        url : '/book/list',
        templateUrl: 'amv/book/booklist/tmpl/BookList.html'
    };
    var bookEditState = {
        name : 'bookEdit',
        url : '/book/edit?entityId',
        params : {'entityId': null},
        templateUrl: 'amv/book/bookedit/tmpl/BookEdit.html'
    };
    $stateProvider.state(homeState);
    $stateProvider.state(bookListState);
    $stateProvider.state(bookEditState);
});
