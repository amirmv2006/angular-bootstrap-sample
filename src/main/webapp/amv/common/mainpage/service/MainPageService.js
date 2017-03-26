var common = angular.module('Common');
common.service('MainPageService', function (Page) {
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
            if (mainPageSvc.allPages[i].parentPage == null) {
                rootPages.push(mainPageSvc.allPages[i]);
            }
        }
        return rootPages;
    };
    mainPageSvc.getChildPages = function (parentPageName) {
        var childPages = [];
        for (var i = 0; i < mainPageSvc.allPages.length; i++) {
            if (mainPageSvc.allPages[i].parentPage && mainPageSvc.allPages[i].parentPage.pageName == parentPageName) {
                childPages.push(mainPageSvc.allPages[i]);
            }
        }
        return childPages;
    };
});