//noinspection JSAnnotator
angular.module('HomePage', ['Common']).run(function (MainPageService) {
    var homePage = MainPageService.addMainPage("Home", "/", "Home");
    homePage.hasBack = false;
});
