console.log("initializing Book Module");
angular.module('Book', ['Common','datatables']).run(function (MainPageService) {
    console.log("Running Book Module");
    var bookPage = MainPageService.addMainPage("Book", "/", "Book");
    MainPageService.addChildPage("BookList", "/book/list", "Book List", bookPage);
    MainPageService.addChildPage("BookAdd", "/book/add", "Add Book", bookPage);
});