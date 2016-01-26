/// <reference path="../app/app.d.ts" />

 module kdc {
     'use strict';
    
    angular.module(kdc.constants.app, [
        constants.core //used for registration of the global third party dependencies
        , kdc.constants.layout
        , kdc.constants.services
        , kdc.constants.logService
        , kdc.constants.blocks
    
         /*
         * Features areas
         */
        , kdc.constants.about
        , kdc.constants.bookmarks
        , kdc.constants.intro
        , kdc.constants.posts
        , kdc.constants.settings
        , kdc.constants.tabs
        , kdc.constants.filters
    ]);
    
}
