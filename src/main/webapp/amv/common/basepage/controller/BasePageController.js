//noinspection JSAnnotator
angular.module('Common')
    .controller('BasePageCtrl', function ($scope, $controller, MainPageService, pageName) {
        var basePageCtrl = this;
        var page = MainPageService.findPage(pageName);
        if (page == null) {
            page = {
                pageTitle:'Page Title Not Specified',
                actions:[]
            };
        }
        MainPageService.setCurrentPage(page);
    });