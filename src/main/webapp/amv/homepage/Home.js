angular.module('HomePage', ['CRUD']).run(function (NavigationService) {
    var homePage = NavigationService.addMainPage("home", "Home");
    homePage.hasBack = false;
});
