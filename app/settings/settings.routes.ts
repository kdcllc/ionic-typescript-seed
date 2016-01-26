namespace kdc.settings {
     'use strict';
   
    config.$inject = ['$stateProvider'];
    
    function config($stateProvider: ng.ui.IStateProvider) {

        $stateProvider.state('app.settings', {
            url: '/settings',
            views: {
                'menuContent': {
                    templateUrl: 'templates/settings/settings.html' 
                }
            }
        });
    }
    
     angular
        .module(kdc.constants.settings)
        .config(config);
    
}
