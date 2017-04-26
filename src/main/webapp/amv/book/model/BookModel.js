angular.module('Book')
    .factory('BookModel', function () {
        function BookModel() {
            this.name = null;
            this.publishYear = null;
        }
        return (BookModel);
    });