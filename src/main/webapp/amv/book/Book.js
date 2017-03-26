angular.module('Book', ['Common','datatables']).run(function (MainPageService) {
    var bookPage = MainPageService.addMainPage("Book", "/", "Book");
    var bookListPage = MainPageService.addChildPage("BookList", "/book/list", "Book List", bookPage);
    MainPageService.addChildPage("BookAdd", "/book/add", "Add Book", bookListPage);
});