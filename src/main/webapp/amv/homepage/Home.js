angular.module('HomePage', ['CRUD']).run(function (NavigationService) {
    var homePage = NavigationService.addMainPage("Home", "home", "Home");
    homePage.hasBack = false;
});
