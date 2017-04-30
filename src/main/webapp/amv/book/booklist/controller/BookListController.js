angular.module('Book')
    .controller('BookListController', function ($compile, $scope, $location, $controller, $document, $uibModal,
                                                BaseListController, NavigationService, PageAction,
                                                DTOptionsBuilder, DTColumnBuilder, $http,
                                                BookService, BookModel, $q) {
            var main = this;
            main = angular.extend(main, new BaseListController($scope, $location, $controller,
                DTOptionsBuilder, DTColumnBuilder,
                "BookList", "/book", "bookListPageCtrl",
                BookService, BookModel));
        }
    );