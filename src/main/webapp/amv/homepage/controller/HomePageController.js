angular.module('HomePage')
    .controller('HomePageCtrl', function ($scope, $rootScope, $location, $controller, BasePageController) {
        var homePageCtrl = this;
        homePageCtrl = angular.extend(homePageCtrl, new BasePageController($scope, $rootScope, $location, $controller, "Home"));
    });