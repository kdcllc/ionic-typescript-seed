namespace kdc.posts {
    export interface IPostParams extends ng.ui.IStateParamsService {
        postId: string;
    }


    export interface IPostScope {
        postId: string;
        title: string;
        content: string;
        loadPost(): void;

    }

    export class PostController implements IPostScope {
        postId: string;
        title: string;
        content: string;
        public static ID = kdc.constants.posts + '.PostController';

        static $inject = ['$sce', '$stateParams', 'CacheFactory', 'kdc.services.PostsService'];

        constructor(private $sce: ng.ISCEService,
            private $stateParams: IPostParams,
            private CacheFactory: ICacheFactory,
            private blogPostService: kdc.services.IPostsService) {
            var vm = this;

            this.postId = this.$stateParams.postId;
            console.log('Param is: ', this.$stateParams);

            if (!CacheFactory.get('postCache')) {
                console.log('Creating Cache for postCache');
                CacheFactory.createCache('postCache');

            } else {
                console.log('Cache for postCache created');
            }

            this.loadPost();
        }

        loadPost(): void {
            console.log(this.postId);
            this.blogPostService.getById(this.postId).then(data => {
                this.title = data.title.rendered;
                this.content = this.$sce.trustAsHtml(data.content.rendered);
                var self = window;

                self.postCache = this.CacheFactory.get('postCache');
                self.postCache.put(this.postId, data);
                console.log('Cache object' + self.postCache.get(this.postId));


            });
        }
    }

    angular
        .module(kdc.constants.posts)
        .controller(PostController.ID, PostController);

}