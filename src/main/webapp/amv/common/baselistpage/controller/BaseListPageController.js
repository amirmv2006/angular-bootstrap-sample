//noinspection JSAnnotator
angular.module('Common')
    .controller('BaseListPageCtrl', function ($scope, $controller, MainPageService, pageName) {
        var baseListPageCtrl = this;
        var page = MainPageService.findPage(pageName);
        if (page == null) {
            page = {
                pageTitle:'Page Title Not Specified',
                actions:[]
            };
        }
        MainPageService.setCurrentPage(page);
    });