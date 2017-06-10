angular.module('Book', ['CRUD','datatables','ngMessages']).run(function (NavigationService) {
    var bookPage = NavigationService.addMainPage("Book", "home", "Book");
    bookPage.iconClass = "fa fa-book";
    var bookListPage = NavigationService.addChildPage("BookList", "bookList", "Book List", NavigationService.findPage("Home"));
    bookListPage.menuPath = "Book.BookList";
    NavigationService.addChildPage("BookAdd", "bookAdd", "Add Book", bookListPage);
});