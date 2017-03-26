//noinspection JSAnnotator
angular.module('Common')
    .controller('NavigationCtrl', function ($scope, $location, $controller, MainPageService) {
        var navigationCtrl = this;
        navigationCtrl.rootPages = MainPageService.getRootPages();
        for (var i = 0; i < navigationCtrl.rootPages.length; i++) {
            navigationCtrl.rootPages[i].collapsedActiveClass = navigationCtrl.rootPages[i].isCollapsed ? '' : 'active';
            navigationCtrl.rootPages[i].childPages = MainPageService.getChildPages(navigationCtrl.rootPages[i].pageName);
        }
        navigationCtrl.toggleCollapse = function (page) {
            page.isCollapsed = !page.isCollapsed;
            page.collapsedActiveClass = page.isCollapsed ? '' : 'active';
        };
        navigationCtrl.openPage = function (page) {
            if (page.childPages.length == 0) {
                $location.path(page.url);
            }
        };
    });