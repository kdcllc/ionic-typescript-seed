namespace kdc.tabs {
    'use strict';

    export interface ITabsScope {
        title: string;
    }

    export class TabsController implements ITabsScope {
        title: string;
        
        public static ID = kdc.constants.tabs + '.TabsController';
        constructor() {
             this.title = 'Tabs Title';
        }
    }

    angular
        .module(kdc.constants.tabs)
        .controller(TabsController.ID, TabsController);
}