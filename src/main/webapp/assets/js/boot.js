myAppCallback = function () {
    head.load(
        'amv/homepage/Home.js',
        'amv/homepage/controller/HomePageController.js',
        'amv/book/Book.js',
        'amv/book/service/BookService.js',
        'amv/book/booklist/controller/BookListController.js',
        'amv/book/bookedit/controller/BookEditController.js',
        'amv/book/bookedit/component/BookEditComponent.js',
        'amv/MyApp.js'
    );
};
bootCrud(myAppCallback);