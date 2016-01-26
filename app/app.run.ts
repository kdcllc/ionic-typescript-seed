/// <reference path="../app/app.d.ts" />

module kdc {
    
     'use strict';
    
        runApp.$inject = ['$ionicPlatform', 
                           '$log', 
                            'CacheFactory',
                            '$window',
                            kdc.services.CordovaPlugins.ID];
        
        function runApp( $ionicPlatform: ionic.platform.IonicPlatformService,
                         $log: ng.ILogService,
                         CacheFactory: ICacheFactory,
                         $window: Window,
                         plugins: kdc.services.ICordovaPlugins) {
           
            $ionicPlatform.ready(function() {
                
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                plugins.getKeyboard().disableScroll(true);
                plugins.getKeyboard().hideKeyboardAccessoryBar(false);

                if (window.StatusBar) {
                    // org.apache.cordova.statusbar required
                    StatusBar.styleDefault();
                }
            
                CacheFactory('postCache', { storageMode: 'localStorage', 
                                                capacity: 10,
                                                maxAge: 10800000, 
                                                deleteOnExpire: 'aggressive',
                                                recycleFreq: 10000});
                $log.debug('Create postCache');
                                                           
                $window.onerror = function(message: any, uri: string, lineNumber: number, columnNumber?: number) {
                   $log.log('window_onerror ' + message);
                };
                
            }); //ready
            
        }; //runApp
    
    
    
    angular
            .module(kdc.constants.app)
            .run(runApp);
}
