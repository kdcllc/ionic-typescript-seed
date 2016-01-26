module kdc.posts {

    'use strict';

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$ionicConfigProvider'];

    function config($stateProvider: ng.ui.IStateProvider) {

        $stateProvider
            //this is the first sub view, notice menuContent under 'views', which is loaded through menu.html
            .state('app.posts', {
                url: '/posts',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/posts/posts.html',
                        controller: kdc.posts.PostsController.ID,
                        controllerAs: 'vm'
                    }
                }
            })

            .state('app.post', {
                url: '/posts/:postId',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/posts/post.html',
                        controller: kdc.posts.PostController.ID,
                        controllerAs: 'vm'
                    }
                }

            });
    }
    angular
        .module(kdc.constants.posts)
        .config(config);

}
