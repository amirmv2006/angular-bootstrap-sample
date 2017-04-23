angular.module('Book', ['CRUD','datatables','ngMessages']).run(function (NavigationService) {
    var bookPage = NavigationService.addMainPage("Book", "/", "Book");
    bookPage.iconClass = "fa fa-book";
    var bookListPage = NavigationService.addChildPage("BookList", "/book/list", "Book List", NavigationService.findPage("Home"));
    bookListPage.menuPath = "Book.BookList";
    NavigationService.addChildPage("BookAdd", "/book/add", "Add Book", bookListPage);
});