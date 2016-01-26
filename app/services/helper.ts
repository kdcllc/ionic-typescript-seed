namespace kdc.services {
    'use strict';
    
    /**
     * https://github.com/kdcllc/Ionic-TypeScript-Starter
     */
    export class Helper {
       public static ID = kdc.constants.services + '.Helper';
       
       //static $injector = [''];
       
       constructor() {
           
       }
       
        /**
         * Can be used to determine if the application is in debug or release mode.
         * 
         * @returns True if the application is in debug mode, false otherwise.
         */
        public get isDebugMode(): boolean {
            return true;
        }
        
         /**
         * Used to check if the current platform is Android.
         */
        public get isAndroid(): boolean {
            return typeof(device) !== 'undefined' && device.platform === 'Android';
        }

        /**
         * Used to check if the current platform is iOS.
         */
        public get isIos(): boolean {
            return typeof (device) !== 'undefined' && device.platform === 'iOS';
        }
        
         /**
         * Used to check if the current platform is Windows Phone 8.x.
         */
        public get isWindowsPhone8(): boolean {
            return typeof(device) !== 'undefined' && device.platform === 'WP8';
        }

        /**
         * Used to check if the current platform is Windows 8.
         */
        public get isWindows8(): boolean {
            return typeof(device) !== 'undefined' && device.platform === 'Windows8';
        }

        /**
         * Used to check if the current platform is Windows 10 / UWP.
         */
        public get isWindows(): boolean {
            return typeof(device) !== 'undefined' && device.platform === 'windows';
        }
        
         /**
        * Used to return the name of the platform as specified via Cordova.
        */
        public get platform(): string {
            if (typeof (device) === 'undefined') {
                return 'Unknown';
            } else {
                return device.platform;
            }
        }
        
        
    }
    
    angular
          .module(kdc.constants.services)
          .service(Helper.ID, Helper);
    
}