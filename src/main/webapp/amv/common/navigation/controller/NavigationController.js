//noinspection JSAnnotator
angular.module('Common')
    .controller('NavigationCtrl', function ($scope, $location, $controller, MainPageService, Page, PageAction) {
        var navigationCtrl = this;
        navigationCtrl.rootPages = MainPageService.getRootPages();
        for (var i = 0; i < navigationCtrl.rootPages.length; i++) {
            navigationCtrl.rootPages[i].collapsedActiveClass = navigationCtrl.rootPages[i].isCollapsed ? '' : 'active';
            navigationCtrl.rootPages[i].childPages = MainPageService.getChildPages(navigationCtrl.rootPages[i].pageName);
        }

        navigationCtrl.getCurrentPage = function () {
            var currentPage = MainPageService.getCurrentPage();
            if (currentPage && currentPage.hasBack && currentPage.parentPage) {
                currentPage.addAction(new PageAction("Back", "fa fa-arrow-left", function () {
                    MainPageService.goBack();
                }));
            }
            return currentPage;
        };

        navigationCtrl.doPageAction = function (pageAction) {
            var currentPage = MainPageService.getCurrentPage();
            currentPage.actions.forEach(function (act) {
                if (act.label == pageAction.label) {
                    act.action();
                    return;
                }
            })
        };

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