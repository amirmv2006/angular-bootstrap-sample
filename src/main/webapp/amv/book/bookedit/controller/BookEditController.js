//noinspection JSAnnotator
angular.module('Book')
    .controller('BookEditPageCtrl', function ($scope, $location, $controller, $log, MainPageService, NotificationService, Page, PageAction, $http, $q, BookService, REST_BASE_PATH) {
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

        var id = $location.search().id;
        if (id) {
            BookService.getById(id, function (result) {
                angular.copy(result, main.book);
            });
        }

        main.resetForm = function () {
            main.book.name = null;
            main.book.publishYear = 0;
        };


        main.save = function () {
            console.log(main.book);
            // if (main.bookForm.$valid) {
                if (main.book.id) {
                    BookService.update(angular.copy(main.book), function (result) {
                        main.resetForm();
                        $log.debug('RESULT', result);
                        MainPageService.goBack();
                    });
                } else {
                    BookService.save(angular.copy(main.book), function (result) {
                        main.resetForm();
                        $log.debug('RESULT', result);
                        MainPageService.goBack();
                    });
                }
            // } else {
            //     console.log('Invalid');
            // }
        };
        main.resetForm();
    });