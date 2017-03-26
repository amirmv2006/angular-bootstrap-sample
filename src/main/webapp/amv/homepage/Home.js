//noinspection JSAnnotator
console.log("initializing HomePage Module");
angular.module('HomePage', ['Common']).run(function (MainPageService) {
    console.log("Running home page");
    MainPageService.addMainPage("Home", "/", "Home");
});
