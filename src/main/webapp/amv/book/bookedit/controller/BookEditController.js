//noinspection JSAnnotator
angular.module('Book')
    .controller('BookEditPageCtrl', function ($scope, $location, $controller, PageAction, $http, $q) {
        var main = this;
        main = angular.extend(main, $controller('BasePageCtrl', {
            $scope: $scope, page: {
                pageTitle: "Books",
                actions: [new PageAction("Save", "fa fa-save", function () {
                    console.log("Saving");
                    main.save();
                })]
            }
        }));
        main.book = {
            name:null,
            publishYear:0
        };

        main.save = function () {
            $http.post('cxf/rest/Book', main.book);
        }
        console.log('Hi BookEditCtrl');
    });