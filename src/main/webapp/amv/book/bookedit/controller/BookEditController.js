angular.module('Book')
    .controller('BookEditPageCtrl', function ($scope, $rootScope, $location, $state, $stateParams, $controller, $log, $http, $q,
                                              BaseEditController, PageAction, NotificationService, NavigationService,
                                              BookService, BookModel) {
        var main = angular.extend(this, new BaseEditController($scope, $rootScope, $location, $state, $stateParams, $controller,
            "bookEdit", "bookEditPageCtrl",
            BookService, BookModel));

    });