namespace kdc.intro {
    
     'use strict';
  
    config.$inject = ['$stateProvider'];
    
    function config($stateProvider: ng.ui.IStateProvider) {

        $stateProvider.state('app.intro', {
                url: '/intro',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/intro/intro.html',
                        controller: kdc.intro.IntroController.ID,
                        controllerAs: 'vm'
                    }
                }
            });
    }
    
      angular
        .module(kdc.constants.intro)
        .config(config);

}
