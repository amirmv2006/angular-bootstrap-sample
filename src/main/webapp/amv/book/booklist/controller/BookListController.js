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
        bookListPage.addAction(new PageAction("Search", "fa fa-search", function () {
            main.dtInstance._renderer.rerender();
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
                    var pagingDto = {
                        pageNumber: aoData[3].value / aoData[4].value,
                        pageSize: aoData[4].value,
                    };
                    var orderList = [];
                    for (var orderIndex = 0; orderIndex < aoData[2].value.length; orderIndex++) {
                        var orderColumnIndex = aoData[2].value[orderIndex].column;
                        var orderPropertyName = aoData[1].value[orderColumnIndex].data;
                        var sortDto = {
                            propertyName: orderPropertyName,
                            ascending: aoData[2].value[orderIndex].dir.toLowerCase() == "asc"
                        };
                        orderList.unshift(sortDto);
                    }
                    pagingDto.sortList = orderList;

                    $http.post('cxf/rest/Book/searchByExamplePaged',
                        {
                            pagingDto: pagingDto,
                            example:main.searchObject
                        }).then(function (result) {
                        const records = {
                            draw: aoData[0],
                            recordsTotal: result.data.totalCount,
                            recordsFiltered: result.data.afterFilterCount,
                            // recordsFiltered: result.headers('x-meta-total'),
                            data: result.data.records
                        };
                        fnCallback(records);
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
            .withPaginationType('full_numbers')
            .withOption('bFilter', false)
            .withOption('serverSide', true);

        main.dtInstance = {};

        main.dtColumns = [
            DTColumnBuilder.newColumn('name').withTitle('Name').withOption('defaultContent', '-'),
            DTColumnBuilder.newColumn('publishYear').withTitle('Publish Year')
        ];

        main.hideSearch = true;
        main.searchObject = {
            name: null,
            publishYear: null
        };

    });