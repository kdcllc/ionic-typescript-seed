module kdc.filters {

    'use strict';
    RemoveShare.$inject = ['$log', '$sce'];

    export function RemoveShare($log: ng.ILogService, $sce: ng.ISCEService) {
        return function(text: string) {
            return String(text).substr(0, String(text).indexOf('</p>'));
        };
    }
    angular.module(kdc.constants.removeShareFilter, []).filter('remove_share', kdc.filters.RemoveShare);
}
