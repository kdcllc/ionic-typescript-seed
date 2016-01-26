/// <reference path="../app.d.ts" />

module kdc.about {
    
    export interface IAboutController {
        applicationName: string;
        versionString: string;
        commitShortSha: string;
        timestamp: string;
        device: DeviceModel;
               
        copyrightInfo_click(): void;
        website_click(): void;
        gitHubRepo_click(): void;
        
    }
    export class DeviceModel {
		platform:string;
		version:string;
		uuid:string;
		cordova:string;
		model:string;
		
    }
  
    export class AboutController implements IAboutController {
        applicationName: string;
        versionString: string;
        commitShortSha: string;
        timestamp: string;
        device: DeviceModel;
       
        public static ID = kdc.constants.about + '.AboutController';
        
        static $inject = [kdc.services.CordovaPlugins.ID];
        
        constructor(private plugins: kdc.services.ICordovaPlugins) {
            try {
                
                var d = plugins.getCordovaDevice();
                console.log(d);
                
                this.device = {
                    cordova: d.cordova,
                    model: d.model,
                    platform: d.platform,
                    uuid: d.uuid,
                    version: d.version
                }; 
            
            } catch (error) {
                this.plugins.getToaster().showLongBottom(error);
            }
            
        }
        
        copyrightInfo_click(): void {
            
             throw new Error('Whoops!');
                      
        }
       
       website_click(): void {
           
       }
       
        gitHubRepo_click(): void {
            
        }
    }
    
    
    angular
            .module(kdc.constants.about)
            .controller(AboutController.ID, AboutController);
            
}