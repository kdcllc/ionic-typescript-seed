module kdc.filters {

    'use strict';
    ExternalLink.$inject = ['$log'];
        
    export function ExternalLink($log: ng.ILogService) {
        return function(text: string) {
            return String(text).replace(/href=/gm, 'class=\'ex-link\' href=');
        };
    }

    angular.module(kdc.constants.filters, []).filter('ext_link', kdc.filters.ExternalLink);

}
