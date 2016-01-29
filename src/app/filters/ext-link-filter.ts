module kdc.filters.external {

    'use strict';
    ExternalLink.$inject = ['$log'];
        
    export function ExternalLink($log: ng.ILogService) {
        return function(text: string) {
            return String(text).replace(/href=/gm, 'class=\'ex-link\' href=');
        };
    }

    angular.module(kdc.constants.externalLinkFilter, []).filter('ext_link', ExternalLink);

}
