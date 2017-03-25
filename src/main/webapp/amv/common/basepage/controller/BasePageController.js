//noinspection JSAnnotator
angular.module('Common')
    .controller('BasePageCtrl', function ($scope, page, PageAction) {
        var main = this;
        if (page == null) {
            page = {
                pageTitle:'Page Title Not Specified',
                actions:[]
            };
        }
        main.pageTitle = page.pageTitle;
        main.actions = page.actions;
        main.actions.unshift(new PageAction("Back", "fa fa-arrow-left", function () {
            console.log('Going Back');
        }));
        console.log('Hi Base');
    });