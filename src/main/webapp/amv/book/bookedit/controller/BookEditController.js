//noinspection JSAnnotator
angular.module('Book')
    .controller('BookEditPageCtrl', function ($scope, $location, $controller, MainPageService, Page, PageAction, $http, $q) {
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

        main.book = {
            name: null,
            publishYear: 0
        };

        main.save = function () {
            $http.post('cxf/rest/Book', main.book);
        };
    });