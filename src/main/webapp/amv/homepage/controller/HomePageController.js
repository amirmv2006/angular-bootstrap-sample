angular.module('HomePage')
    .controller('HomePageCtrl', function ($scope, $location, $controller, BasePageController) {
        var homePageCtrl = this;
        homePageCtrl = angular.extend(homePageCtrl, new BasePageController($scope, $location, $controller, "Home"));
    });