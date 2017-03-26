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
            templateUrl: 'amv/homepage/tmpl/HomePage.html',
            controller: 'HomePageCtrl',
            controllerAs: 'homePageCtrl',
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

myModule.config(['$compileProvider', function ($compileProvider) {
    $compileProvider.debugInfoEnabled(false);
}]);
