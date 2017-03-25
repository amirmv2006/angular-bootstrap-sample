var myModule = angular.module('AMV',
    [
        'ngRoute',
        'ngAnimate',
        'ngMessages',
        'Common',
        'MainPage',
        'Book'
    ]);
myModule.config(function($routeProvider, $httpProvider, $provide) {

    $routeProvider
        .when('/', {
            templateUrl: 'amv/mainpage/controller/tmpl/MainPage.html',
            controller: 'MainPageCtrl',
            controllerAs: 'mainPageCtrl',
            requiresLogin: true
        })
        .when('/book/list', {
            templateUrl: 'amv/book/booklist/tmpl/BookList.html',
            controller: 'BookListPageCtrl',
            controllerAs: 'bookListPageCtrl',
            requiresLogin: true
        })
        .when('/book/add', {
            templateUrl: 'amv/book/bookedit/tmpl/BookEdit.html',
            controller: 'BookEditPageCtrl',
            controllerAs: 'bookEditPageCtrl',
            requiresLogin: true
        })
        .otherwise({redirectTo: '/'});

});
