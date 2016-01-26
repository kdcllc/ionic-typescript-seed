module kdc.filters {
    angular.module(kdc.constants.filters, [])
        .filter('ext_link', function($sce) {
            return function(text) {
                return String(text).replace(/href=/gm, 'class=\'ex-link\' href=');
            };

        });
}
