module kdc.tabs {
    
    'use strict';
  
    config.$inject = ['$stateProvider'];
    
    function config($stateProvider: ng.ui.IStateProvider) {

        $stateProvider.state('app.tabs', {
            url: '/tabs',
            views: {
                'menuContent': {
                    templateUrl: 'templates/tabs/tabs.html' ,
                    controller: kdc.tabs.TabsController.ID,
                    controllerAs: 'vm'
                }
            }
        });
    }
    
      angular
        .module(kdc.constants.tabs)
        .config(config);

    
}
