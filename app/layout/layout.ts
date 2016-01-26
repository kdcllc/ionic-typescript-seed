namespace kdc.layout {
    
    
    //sets the parent $rootScope to the WP json url all of the other controllers use this value
    class LayoutController {
        public static ID = kdc.constants.layout + '.LayoutController';
        
        static $inject = ['$rootScope', kdc.blocks.ApiEndpointProvider.ID];

        constructor(private apiEndpoint: kdc.blocks.IApiEndpointConfig) {
                      
        }
    }

    angular
        .module(kdc.constants.layout)
        .controller(LayoutController.ID, LayoutController);
}