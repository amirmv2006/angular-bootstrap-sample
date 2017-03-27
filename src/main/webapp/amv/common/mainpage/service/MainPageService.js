var common = angular.module('Common');
common.service('MainPageService', function ($location, Page) {
    var mainPageSvc = this;
    mainPageSvc.allPages = [];

    mainPageSvc.addMainPage = function(pageName, url, title) {
        var page = new Page(pageName, url, title, null);
        mainPageSvc.allPages.push(page);
        return page;
    };
    mainPageSvc.addChildPage = function(pageName, url, title, parentPage) {
        var page = new Page(pageName, url, title, parentPage);
        mainPageSvc.allPages.push(page);
        return page;
    };

    mainPageSvc.findPage = function (pageName) {
        for (var i = 0; i < mainPageSvc.allPages.length; i++) {
            if (mainPageSvc.allPages[i].pageName == pageName) {
                return mainPageSvc.allPages[i];
            }
        }
    };
    mainPageSvc.getRootPages = function () {
        var rootPages = [];
        for (var i = 0; i < mainPageSvc.allPages.length; i++) {
            if (!mainPageSvc.allPages[i].menuPath.includes('.')) {
                rootPages.push(mainPageSvc.allPages[i]);
            }
        }
        return rootPages;
    };
    mainPageSvc.getChildPages = function (parentPageName) {
        var childPages = [];
        mainPageSvc.allPages.forEach(function (page) {
            if (page.menuPath.includes('.')) {
                var lastIndexOfDot = page.menuPath.lastIndexOf(".");
                if (page.menuPath.substring(0, lastIndexOfDot) == parentPageName) {
                    childPages.push(page);
                }
            }
        });
        return childPages;
    };

    mainPageSvc.goBack = function () {
        $location.path(mainPageSvc.currentPage.parentPage.url);
    };

    // current page
    mainPageSvc.currentPage = null;
    mainPageSvc.setCurrentPage = function (page) {
        mainPageSvc.currentPage = page;
    };
    mainPageSvc.getCurrentPage = function () {
        return mainPageSvc.currentPage;
    }
});