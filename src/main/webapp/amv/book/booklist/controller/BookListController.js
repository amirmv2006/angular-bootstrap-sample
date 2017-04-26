angular.module('Book')
    .controller('BookListController', function ($compile, $scope, $location, $controller, $document, $uibModal,
                                                BasePageController, NavigationService, PageAction,
                                                DTOptionsBuilder, DTColumnBuilder, $http,
                                                BookService, BookModel, $q) {
            var main = this;
            main = angular.extend(main, new BasePageController($scope, $location, $controller, "BookList"));
            var bookListPage = main.page;
            bookListPage.addAction(new PageAction("Add", "fa fa-plus", function () {
                $location.path('/book/add');
            }));
            bookListPage.addAction(new PageAction("Search", "fa fa-search", function () {
                main.dtInstance._renderer.rerender();
            }));
            main.dtOptions = DTOptionsBuilder
                .newOptions().withFnServerData(function (sSource, aoData, fnCallback, oSettings) {
                        var pagingDto = {
                            pageNumber: aoData[3].value / aoData[4].value,
                            pageSize: aoData[4].value
                        };
                        var orderList = [];
                        for (var orderIndex = 0; orderIndex < aoData[2].value.length; orderIndex++) {
                            var orderColumnIndex = aoData[2].value[orderIndex].column;
                            var orderPropertyName = aoData[1].value[orderColumnIndex].data;
                            var sortDto = {
                                propertyName: orderPropertyName,
                                ascending: aoData[2].value[orderIndex].dir.toLowerCase() === "asc"
                            };
                            orderList.unshift(sortDto);
                        }
                        pagingDto.sortList = orderList;

                        BookService.searchByExamplePaged(main.searchObject, pagingDto, function (result) {
                            const records = {
                                draw: aoData[0],
                                recordsTotal: result.totalCount,
                                recordsFiltered: result.afterFilterCount,
                                // recordsFiltered: result.headers('x-meta-total'),
                                data: result.records
                            };
                            fnCallback(records);
                        })

                    }
                )
                .withPaginationType('full_numbers')
                .withOption('bFilter', false)
                .withOption('serverSide', true)
                .withOption('pagingType', 'simple_numbers');

            main.dtInstance = {};

            main.dtColumns = [
                DTColumnBuilder.newColumn('name').withTitle('Name').withOption('defaultContent', '-'),
                DTColumnBuilder.newColumn('publishYear').withTitle('Publish Year'),
                DTColumnBuilder.newColumn('id').withTitle('-').withOption('render', function (data, type, full) {
                    return '<a href="javascript:;" class="ng-scope" ng-click="bookListPageCtrl.edit(' + data + ')"><span class="fa fa-pencil"></span></a>&nbsp;' +
                        '<a href="javascript:;" class="ng-scope" ng-click="bookListPageCtrl.delete(' + data + ')"><span class="fa fa-trash"></span></a>'
                })
            ];

            main.edit = function (id) {
                $location.path('/book/add').search({id: id});
            };
            main.delete = function (id) {
                var parentElem = angular.element($document[0].querySelector('.modal-demo'));
                var modalInstance = $uibModal.open({
                    animation: true,
                    ariaLabelledBy: 'modal-title',
                    ariaDescribedBy: 'modal-body',
                    templateUrl: 'DeleteConfirm.html',
                    controller: 'DeleteModelCtrl',
                    controllerAs: 'deleteModelCtrl',
                    size: 'lg',
                    appendTo: parentElem,
                    resolve: {
                        id: function () {
                            return id;
                        },
                        refresh: function () {

                        }
                    }
                });
                modalInstance.result.then(function (success) {
                    if (success) {
                        main.dtInstance._renderer.rerender();
                    }
                })
            };

            main.dtInstanceCallback = function (dtInstance) {
                main.dtInstance = dtInstance;
                dtInstance.DataTable.on('draw.dt', function () {
                    var elements = angular.element("#" + dtInstance.id + " .ng-scope");
                    angular.forEach(elements, function (element) {
                        $compile(element)($scope);
                    });
                });
            };

            main.hideSearch = true;
            main.searchObject = new BookModel();
        }
    );
angular.module('Book')
    .controller('DeleteModelCtrl', function ($uibModalInstance, $http, id, BookService) {
        var deleteModelCtrl = this;
        deleteModelCtrl.ok = function () {
            BookService.deleteById(id, function (result) {
                $uibModalInstance.close(true);
            });
        };
        deleteModelCtrl.cancel = function () {
            $uibModalInstance.close(false);
        };
    });