/// <reference path="../app/app.d.ts" />

module kdc {
     'use strict';
     
     stateConfig.$inject = ['$stateProvider',
                            '$urlRouterProvider',
                            '$ionicConfigProvider',
                            '$logProvider',
                            '$compileProvider'];


    function stateConfig($stateProvider: ng.ui.IStateProvider,
                         $urlRouterProvider: ng.ui.IUrlRouterProvider,
                         $ionicConfigProvider: IonicConfigProvider,
                         $logProvider: ng.ILogProvider,
                         $compileProvider: ng.ICompileProvider) {

        // Whitelist several URI schemes to prevent Angular from marking them as un-safe.
        // http://stackoverflow.com/questions/19590818/angularjs-and-windows-8-route-error
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|ghttps?|ms-appx|x-wmapp0|chrome-extension):/);
        $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|ms-appx|x-wmapp0):|data:image\//);
        
        // Enable swipe navigation for all platforms (usually only is enabled for iOS).
        $ionicConfigProvider.views.swipeBackEnabled(true);
        
        // Native scrolling
        if (ionic.Platform.isAndroid()) {
            $ionicConfigProvider.scrolling.jsScrolling(false);
        }
        
        
        
        $logProvider.debugEnabled(true);
        
        $stateProvider
            // sets up our default state, all views are loaded through here
            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/layout/menu.html'
            });
       
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/intro');
    };
    
    
    angular
        .module(kdc.constants.app)
        .config(stateConfig);
}
