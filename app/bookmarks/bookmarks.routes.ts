namespace kdc.bookmarks {
     'use strict';
   

    config.$inject = ['$stateProvider'];
    
    function config($stateProvider: ng.ui.IStateProvider) {

        $stateProvider.state('app.bookmarks', {
                url: '/bookmarks',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/bookmarks/bookmarks.html',
                        controller:  kdc.bookmarks.BookmarksController.ID , // 'kdc.bookmarks.BookmarksController',
                        controllerAs: 'vm'
                    }
                }
            });
    }
    
     angular
        .module(kdc.constants.bookmarks)
        .config(config);
}
