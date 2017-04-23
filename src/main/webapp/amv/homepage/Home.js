angular.module('HomePage', ['CRUD']).run(function (NavigationService) {
    var homePage = NavigationService.addMainPage("Home", "/", "Home");
    homePage.hasBack = false;
});
