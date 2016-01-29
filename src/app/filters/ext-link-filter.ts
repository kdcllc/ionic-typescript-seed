module kdc.filters {
    angular.module(kdc.constants.filters, [])
        .filter('ext_link', function($sce) {
            return function(text) {
                return String(text).replace(/href=/gm, 'class=\'ex-link\' href=');
            };

        })
        //posts feed contains share this informaiton that can be removed
        .filter('remove_share', function($sce: ng.ISCEService){
            return function(text){
               //return $sce.trustAsHtml( String(text).substr(0, String(text).indexOf('</p>')));
              return $sce.trustAsHtml(text);  
            };
        });
        
}
