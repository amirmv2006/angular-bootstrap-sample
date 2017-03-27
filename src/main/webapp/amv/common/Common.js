//noinspection JSAnnotator
var common = angular.module('Common', ['ui.bootstrap']);
common.factory('PageAction', function () {
    function PageAction(label, icon, action) {
        this.label = label;
        this.icon = icon;
        this.action = action;
    }
    return (PageAction);
});
common.factory('Page', function () {
   function Page(pageName, url, title, parentPage) {
       this.pageName = pageName;
       this.url = url;
       this.title = title;
       this.parentPage = parentPage;
       this.isCollapsed = true;
       this.actions = [];
       this.hasBack = true;
       this.menuPath = pageName;
       if (parentPage) {
           this.menuPath = this.menuPath + "." + parentPage.menuPath;
       }
       this.iconClass = "fa fa-question";
   }
   Page.prototype.addAction = function (pageAction) {
       var page = this;
       var duplicate = false;
       for (var pageIndex = 0; pageIndex < page.actions.length; pageIndex++) {
           if (page.actions[pageIndex].label == pageAction.label) {
               duplicate = true;
           }
       }
       if (!duplicate) {
           page.actions.unshift(pageAction);
       }
   };
   return (Page);
});
