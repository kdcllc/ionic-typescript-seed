/// <reference path="../app/app.d.ts" />

interface CordovaPlugins {
  Device: Device;
}

/**
 * These are the Cordova plug-ins that are available via the global window.plugins object.
 */
interface Plugins {
    /**
     * This plugin allows showing toast messages cross platform for Android, iOS, and WP8.
     */
    toast: ICordovaToastPlugin;
}

/**
    extends the base cachefactory objec to suppot the angular-cache object
*/
 interface ICacheFactory extends ng.ICacheFactoryService {
        (cacheId: string, optionsMap?: { storageMode?: string;
                                         capacity?: number;
                                         maxAge?: number;
                                         deleteOnExpire?: string;
                                         recycleFreq?: number }): ng.ICacheObject;
                                         
        createCache(cacheId: string) : ng.ICacheObject;
 }
 
 /**
 
    Add cache object to the window object
 */ 
 interface Window  {
        postCache: any;
        
}      
 

interface IonicConfigProvider extends ionic.utility.IonicConfigProvider {
        views: {
                transition(transition?: string): string;
                maxCache(maxNumber?: number): number;
                forwardCache(value?: boolean): boolean;
                swipeBackEnabled(value?: boolean): boolean;
        };
    }



