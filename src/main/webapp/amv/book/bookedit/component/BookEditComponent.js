angular.module('Book')
    .component('bookedit', {
        templateUrl:"amv/book/bookedit/tmpl/BookEditComponent.html",
        controllerAs:'bookEditComponentCtrl',
        bindings: {
            book:'='
        }
        ,controller: function () {
        }
    });