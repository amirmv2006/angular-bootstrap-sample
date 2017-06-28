angular.module('Book', ['CRUD','datatables','ngMessages']).run(function (NavigationService) {
    var bookPage = NavigationService.addMainPage("book", "Book");
    bookPage.iconClass = "fa fa-book";
    var bookListPage = NavigationService.addChildPage("bookList", "Book List", NavigationService.findPage("book"));
    bookListPage.menuPath = "book.bookList";
    var addBookPage = NavigationService.addChildPage("bookEdit", "Edit Book", bookListPage);
    addBookPage.menuPath = "";
});