angular.module('Book', ['Common','datatables']).run(function (MainPageService) {
    var bookPage = MainPageService.addMainPage("Book", "/", "Book");
    MainPageService.addChildPage("BookList", "/book/list", "Book List", bookPage);
    MainPageService.addChildPage("BookAdd", "/book/add", "Add Book", bookPage);
});