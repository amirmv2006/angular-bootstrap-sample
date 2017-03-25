//noinspection JSAnnotator
angular.module('HomePage')
    .controller('HomePageCtrl', function ($scope, $location, $controller) {
        var homePageCtrl = this;
        homePageCtrl = angular.extend(homePageCtrl, $controller('BasePageCtrl', {$scope: $scope, page:{
            pageTitle:"Home",
            actions:[]
        }}));
    });