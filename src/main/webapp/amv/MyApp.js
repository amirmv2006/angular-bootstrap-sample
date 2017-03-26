var myModule = angular.module('AMV',
    [
        'ngRoute',
        'ngAnimate',
        'ngMessages',
        'Common',
        'HomePage',
        'Book'
    ]);
myModule.config(function($routeProvider, $httpProvider, $provide) {

    $routeProvider
        .when('/', {
            templateUrl: 'amv/homepage/tmpl/HomePage.html'
        })
        .when('/book/list', {
            templateUrl: 'amv/book/booklist/tmpl/BookList.html'
        })
        .when('/book/add', {
            templateUrl: 'amv/book/bookedit/tmpl/BookEdit.html'
        })
        .otherwise({redirectTo: '/'});
});
