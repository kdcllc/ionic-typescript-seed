/// <reference path="../app.d.ts" />

/**
 * 
 * https://github.com/kdcllc/Ionic-TypeScript-Starter 
 */
module kdc.services {
    'use strict';
    export interface IMockPlatformApis {
        getToastPlugin(): ICordovaToastPlugin;
        getKeyboardPlugin(): Ionic.Keyboard;
        //getCordovaDevice(): ngCordova.IDeviceService;
        getCordovaDevice(): Device;
    }
    
    /**
    * Provides mock implementation APIs that may not be available on all platforms.
    */
    export class MockPlatformApis implements IMockPlatformApis {
        public static ID = kdc.constants.services + '.MockPlatformApis';

        static $inject = ['$q',
            '$ionicPopup',
            '$ionicLoading'];

        constructor(private $q: ng.IQService,
            private $ionicPopup: ionic.popup.IonicPopupService,
            private $ionicLoading: ionic.loading.IonicLoadingService) {
        }

        public getToastPlugin(): ICordovaToastPlugin {
            return {
                show: _.bind(this.toast, this),
                showLongBottom: _.bind(this.toast, this),
                showLongCenter: _.bind(this.toast, this),
                showLongTop: _.bind(this.toast, this),
                showShortBottom: _.bind(this.toast, this),
                showShortCenter: _.bind(this.toast, this),
                showShortTop: _.bind(this.toast, this)
            };
        }

        private toast(message: string) {

            var div = document.createElement('div');
            div.className = 'mockToast';
            div.style.position = 'absolute';
            div.style.bottom = '60px';
            div.style.width = '100%';
            div.style.textAlign = 'center';
            div.style.zIndex = '9000';

            var span = document.createElement('span');
            span.style.backgroundColor = '#444444';
            span.style.opacity = '0.8';
            span.style.color = '#fff';
            span.style.padding = '10px';
            span.style.borderRadius = '40px';
            span.innerText = message;
            div.appendChild(span);

            document.body.appendChild(div);

            var removeToast = function() {
                try {
                    document.body.removeChild(div);
                } catch (err) {
                    /* tslint:disable:no-empty */
                    /* tslint:enable:no-empty */
                }
            };

            div.addEventListener('click', removeToast);

            setTimeout(removeToast, 3000);
        }
        
        public getKeyboardPlugin(): Ionic.Keyboard {
            return {
                hideKeyboardAccessoryBar: _.bind(this.noOp, this),
                close: _.bind(this.noOp, this),
                show: _.bind(this.noOp, this),
                disableScroll: _.bind(this.noOp, this),
                isVisible: false
            };
        }
        
        private noOp(): void {
            // No Op!
        }
        
         public getCordovaDevice(): Device {
             return {
                 cordova: 'cordova n/a',
                 model: 'model n/a',
                 platform: 'platform n/a',
                 manufacturer: 'manufacturer n/a',
                 capture: null,
                 isVirtual: true,
                 serial: 'serial n/a',
                 uuid: 'uuid n/a',
                 version: 'version n/a'
             };
        
    //     public getCordovaDevice(): Device {
    //          return {
    //              getDevice: _.bind(this.noOp, this),
    //              getCordova: _.bind(this.deviceCordova, this),
    //              getName: _.bind(this.deviceName, this),
    //              getModel: _.bind(this.noOp, this),
    //              getPlatform: _.bind(this.noOp, this),
    //              getManufacturer: _.bind(this.noOp, this),
    //              getUUID: _.bind(this.noOp, this),
    //              getVersion: _.bind(this.noOp, this)
    //          };
    //      }
    //      
    //   private deviceCordova(): string {
    //       return 'cordova n/a';
    //   }
    //   private deviceName(): string {
    //       return 'name n/a';
      }
    }
    angular
        .module(kdc.constants.services)
        .service(MockPlatformApis.ID, MockPlatformApis);
}
 