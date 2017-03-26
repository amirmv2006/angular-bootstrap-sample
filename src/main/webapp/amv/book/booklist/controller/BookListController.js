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
        main.dtOptions = DTOptionsBuilder
        /*.newOptions().withOption('ajax', {
         url: 'cxf/rest/Book/datatable',
         dataType: "jsonp",
         type: 'POST'
         // data: function (data, dtInstance) {
         //     console.log(data);
         //     // Modify the data object properties here before being passed to the server
         // }
         }).withDataProp('data')*/

            .newOptions().withFnServerData(function (sSource, aoData, fnCallback, oSettings) {
                    $http.post('cxf/rest/Book/datatable',
                        {
                            columns: aoData[1].value,
                            order: aoData[2].value,
                            start: aoData[3].value,
                            length: aoData[4].value,
                            search: aoData[5].value
                        }).then(function (result) {
                        const records = {
                            draw: aoData[0],
                            recordsTotal: result.headers('x-meta-total'),
                            recordsFiltered: result.headers('x-meta-total'),
                            data: result.data
                        };
                        fnCallback(records)
                    })

                }
            )

            // .fromFnPromise(function (p1, p2, p3, p4) {
            //     var defer = $q.defer();
            //     $http.get('cxf/rest/Book').then(function (result) {
            //         defer.resolve(result.data);
            //     });
            //     return defer.promise;
            // })
            .withPaginationType('full_numbers').withOption('serverSide', true);
        main.dtColumns = [
            DTColumnBuilder.newColumn('name').withTitle('Name').withOption('defaultContent', '-'),
            DTColumnBuilder.newColumn('publishYear').withTitle('Publish Year')
        ];

    });