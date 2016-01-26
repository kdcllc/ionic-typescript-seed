
module kdc.about {
     'use strict';
   

    config.$inject = ['$stateProvider'];
    
    function config($stateProvider: ng.ui.IStateProvider) {

        $stateProvider.state('app.about', {
                url: '/about',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/about/about.html',
                        controller: kdc.about.AboutController.ID,
                        controllerAs: 'vm'
                    }
                }
            });
    }
    
     angular
        .module(kdc.constants.about)
        .config(config);
}
