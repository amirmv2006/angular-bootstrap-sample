//noinspection JSAnnotator
console.log("initializing Common Module");
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
   }
   return (Page);
});
