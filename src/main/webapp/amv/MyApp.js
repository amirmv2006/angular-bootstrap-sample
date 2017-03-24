var myModule = angular.module('AMV',
    [
        'ngRoute',
        'ngAnimate',
        'ngMessages',
        'MainPage'
    ]);
myModule.config(function($routeProvider, $httpProvider, $provide) {

    $routeProvider
        .when('/', {
            templateUrl: 'amv/mainpage/controller/tmpl/MainPage.html',
            controller: 'MainPageCtrl',
            controllerAs: 'mainPageCtrl',
            requiresLogin: true
        })
        .otherwise({redirectTo: '/'});

});
