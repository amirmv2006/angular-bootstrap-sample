//noinspection JSAnnotator
angular.module('Book')
    .controller('BookListPageCtrl', function ($scope, $location, $controller, MainPageService, Page, PageAction, DTOptionsBuilder, DTColumnBuilder, $http, $q) {
        var main = this;
        main = angular.extend(main, $controller('BasePageCtrl', {
            $scope: $scope,
            $controller: $controller,
            MainPageService: MainPageService,
            pageName: "BookList"
        }));
        var bookListPage = MainPageService.findPage("BookList");
        bookListPage.addAction(new PageAction("Add", "fa fa-plus", function () {
            $location.path('/book/add');
        }));
        main.dtOptions = DTOptionsBuilder.fromFnPromise(function () {
            var defer = $q.defer();
            $http.get('cxf/rest/Book').then(function (result) {
                defer.resolve(result.data);
            });
            return defer.promise;
        }).withPaginationType('full_numbers');
        main.dtColumns = [
            DTColumnBuilder.newColumn('name').withTitle('Name').withOption('defaultContent', '-'),
            DTColumnBuilder.newColumn('publishYear').withTitle('Publish Year')
        ];
    });