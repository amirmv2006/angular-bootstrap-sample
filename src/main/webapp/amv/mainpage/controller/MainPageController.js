//noinspection JSAnnotator
angular.module('MainPage')
    .controller('MainPageCtrl', function ($scope, $location, $controller) {
        var main = this;
        main = angular.extend(main, $controller('BasePageCtrl', {$scope: $scope, page:{
            pageTitle:"Home",
            actions:[]
        }}));
        console.log('Hi Main');
    });