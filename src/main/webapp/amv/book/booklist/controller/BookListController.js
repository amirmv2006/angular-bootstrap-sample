angular.module('Book')
    .controller('BookListController', function ($compile, $scope, $rootScope, $location, $state, $controller, $document, $uibModal,
                                                BaseListController, NavigationService, PageAction,
                                                DTOptionsBuilder, DTColumnBuilder, $http,
                                                BookService, BookModel, $q) {
            var main = this;
            main = angular.extend(main, new BaseListController($scope, $rootScope, $location, $state, $controller,
                DTOptionsBuilder, DTColumnBuilder,
                "bookList", "bookListPageCtrl",
                BookService, BookModel));
        }
    );