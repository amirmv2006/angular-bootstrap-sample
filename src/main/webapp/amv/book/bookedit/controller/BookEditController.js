angular.module('Book')
    .controller('BookEditPageCtrl', function ($scope, $location, $controller, $log, $http, $q,
                                              BasePageController, PageAction, NotificationService, NavigationService, BookService
                                              ) {
        var main = this;
        main = angular.extend(main, new BasePageController("BookAdd"));
        var bookAddPage = NavigationService.findPage("BookAdd");
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
                    NavigationService.goBack();
                });
            } else {
                BookService.save(angular.copy(main.book), function (result) {
                    main.resetForm();
                    $log.debug('RESULT', result);
                    NavigationService.goBack();
                });
            }
            // } else {
            //     console.log('Invalid');
            // }
        };
        main.resetForm();
    });