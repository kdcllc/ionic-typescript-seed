/// <reference path="../app.d.ts" />

module kdc.services {
    'use strict';

    export interface ICordovaPlugins {
        getToaster(): ICordovaToastPlugin;
        getKeyboard(): Ionic.Keyboard;
        getCordovaDevice(): Device; 
    }
    
    /* 
        used to create instance of the cordova plugins based on the testing platform.
    */
    export class CordovaPlugins implements ICordovaPlugins {

        public static ID = kdc.constants.services + '.CordovaPlugins';

        static $inject = [kdc.services.Helper.ID,
                          kdc.services.MockPlatformApis.ID,
                          '$cordovaDevice',
                          '$ionicPlatform'];

        constructor(private helper: kdc.services.Helper,
                    private mockPlatformApis: kdc.services.MockPlatformApis,
                    private cordovaToast: ICordovaToastPlugin,
                    private device: Device,
                    private ionicPlatform: ionic.platform.IonicPlatformService) {

        }


        public getToaster(): ICordovaToastPlugin {
            if (!this.helper.isWindows && !this.helper.isWindows8 && window.plugins && window.plugins.toast) {
                return window.plugins.toast;
            } else {
                return this.mockPlatformApis.getToastPlugin();
            }
        }
        
       public getKeyboard(): Ionic.Keyboard {
            if (typeof(cordova) !== 'undefined' && cordova.plugins && cordova.plugins.Keyboard) {
                return cordova.plugins.Keyboard;
            } else {
                return this.mockPlatformApis.getKeyboardPlugin();
            }
        } 
        
        public getCordovaDevice(): Device {
              if (typeof(cordova) !== 'undefined' && cordova.plugins) {
                   return device;
                } else {
                  return this.mockPlatformApis.getCordovaDevice();
              }
           
        }
    }


    angular
        .module(kdc.constants.services)
        .service(CordovaPlugins.ID, CordovaPlugins);

}