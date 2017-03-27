angular.module('Book', ['Common','datatables']).run(function (MainPageService) {
    var bookPage = MainPageService.addMainPage("Book", "/", "Book");
    bookPage.iconClass = "fa fa-book";
    var bookListPage = MainPageService.addChildPage("BookList", "/book/list", "Book List", MainPageService.findPage("Home"));
    bookListPage.menuPath = "Book.BookList";
    MainPageService.addChildPage("BookAdd", "/book/add", "Add Book", bookListPage);
});