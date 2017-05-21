angular.module('Book')
    .controller('BookEditPageCtrl', function ($scope, $location, $controller, $log, $http, $q,
                                              BaseEditController, PageAction, NotificationService, NavigationService,
                                              BookService, BookModel) {
        var main = angular.extend(this, new BaseEditController($scope, $location, $controller,
            "BookAdd", "/book", "bookEditPageCtrl",
            BookService, BookModel));

    });