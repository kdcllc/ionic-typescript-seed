/// <reference path="../app/app.d.ts" />

module kdc.core {
    
     angular.module(kdc.constants.core,
        [
                            
            /*
                Ionic Core modules
            */

            'ionic'
              
            /*
            Angular Modules
            */
            , 'ngCordova'
            , 'angular-cache'
                        
            /*
                App's reusable cross app code modules
            */
            
            /*
                3rd Party Modules
            */
            , 'templates'
        ]);
    
}
