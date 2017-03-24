//noinspection JSAnnotator
angular.module('Common')
    .controller('BasePageCtrl', function ($scope, page) {
        var main = this;
        if (page == null) {
            page = {
                pageTitle:'Page Title Not Specified',
                actions:[]
            };
        }
        main.pageTitle = page.pageTitle;
        main.actions = page.actions;
        console.log('Hi Base');
    });