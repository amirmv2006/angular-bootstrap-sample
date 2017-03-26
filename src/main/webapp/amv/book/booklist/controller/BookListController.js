//noinspection JSAnnotator
angular.module('Book')
    .controller('BookListPageCtrl', function ($scope, $location, $controller, PageAction, DTOptionsBuilder, DTColumnBuilder, $http, $q) {
        var main = this;
        main = angular.extend(main, $controller('BasePageCtrl', {
            $scope: $scope, page: {
                pageTitle: "Books",
                actions: [new PageAction("Add", "fa fa-plus", function () {
                    $location.path('/book/add');
                    console.log("Adding");
                })]
            }
        }));
        main.dtOptions = DTOptionsBuilder.fromFnPromise(function () {
            var defer = $q.defer();
            $http.get('cxf/rest/Book').then(function (result) {
                defer.resolve(result.data);
            });
            return defer.promise;
        }).withPaginationType('full_numbers');
        main.dtColumns = [
            DTColumnBuilder.newColumn('name').withTitle('Name'),
            DTColumnBuilder.newColumn('publishYear').withTitle('Publish Year')
        ];
        console.log('Hi BookListCtrl');
    });