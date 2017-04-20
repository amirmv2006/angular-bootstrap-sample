angular.module('Book')
    .service('BookService', function ($http, BaseCrudService, REST_BASE_PATH) {
        var bookService = angular.extend(this, new BaseCrudService($http, '/Book', REST_BASE_PATH));
    });