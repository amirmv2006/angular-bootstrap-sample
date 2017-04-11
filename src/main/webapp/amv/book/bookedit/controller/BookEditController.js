//noinspection JSAnnotator
angular.module('Book')
    .controller('BookEditPageCtrl', function ($scope, $location, $controller, $log, MainPageService, NotificationService, Page, PageAction, $http, $q) {
        var main = this;
        main = angular.extend(main, $controller('BasePageCtrl', {
            $scope: $scope,
            $controller: $controller,
            MainPageService: MainPageService,
            pageName: "BookAdd"
        }));
        var bookAddPage = MainPageService.findPage("BookAdd");
        bookAddPage.addAction(new PageAction("Save", "fa fa-save", function () {
            console.log("Saving");
            main.save();
        }));
        console.log("initializing Book model");
        main.bookForm = {};
        main.book = {};

        main.resetForm = function () {
            main.book.name = null;
            main.book.publishYear = 0;
        };


        main.save = function () {
            console.log(main.book);
            // if (main.bookForm.$valid) {
                $http.post('cxf/rest/Book', angular.copy(main.book)).then(function (result) {
                    main.resetForm();
                    $log.debug('RESULT', result);
                    MainPageService.goBack();
                }, function (reason) {
                    NotificationService.addErrorNotification(reason.data.detailMessage);
                    $log.debug('ERROR', reason);
                });
            // } else {
            //     console.log('Invalid');
            // }
        };
        main.resetForm();
    });