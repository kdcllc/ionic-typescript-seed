module kdc.blocks {
     'use strict';

        config.$inject = [kdc.blocks.ApiEndpointProvider.Name];
        
        function config(apiEndpointProvider: kdc.blocks.IApIEndpointProvider): void {
            var baseUrl: string = kdc.constants.baseUrl;
            var apiUrl : string = 'wp-json/wp/v2/';
            
            var configureUrl = baseUrl + apiUrl;
            
            apiEndpointProvider.configure(configureUrl);
            
        }
        
        
    angular
        .module(kdc.constants.blocks)
        .config(config);
        

}
