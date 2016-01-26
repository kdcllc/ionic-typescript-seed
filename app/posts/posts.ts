module kdc.posts {

    export interface IPostsScope  {
        title: string;
        moreItems: boolean;
        posts: kdc.models.Posts[];
        
        loadPosts(): void;
        loadMore(): void;
        moreDataExists(): void;
        doRefresh(): void;
        getMediaInfo(data: any): any;

    }

    export class PostsController implements IPostsScope {
        title: string;
        moreItems: boolean;
        posts: kdc.models.Posts[];
        paged: number = 2;
        
        public static ID = kdc.constants.posts + '.PostsController';
        
        static $inject = ['$scope',
                         '$timeout',
                         '$log',
                         kdc.services.PostsService.ID];

        constructor(private $scope: ng.IScope,
                    private $timeout: ng.ITimeoutService,
                    private $log: ng.ILogService,
                    private postsService: kdc.services.IPostsService) {
           
            this.title = 'Blog Posts';
            this.moreItems = false;
            this.posts = [];
            // Load posts on page load
            
            this.$log.log('Controller Initilized');
            this.loadPosts();
             
           }//constructor

      loadPosts(): void {
             //in order to access this for the controller lambda is used
             this.postsService.getPosts().then(data => {
                 this.posts = data;
                 this.moreItems = true;
             });
        }
        
        // Load more (infinite scroll)
        loadMore() : void {
            if (!this.moreItems) {
                    return;
                }
             var pg = this.paged++;    
             this.$log.log('loadMore ' + pg);
             
               this.$timeout(() => {
                    this.postsService.getPostByPage(pg).then(data => {
                        //var i = $scope.getMediaInfo(data);
                        angular.forEach(data, (value, key) => {
                            this.posts.push(value);
                        });

                        if (data.length <= 0) {
                           this.moreItems = false;
                        }
                    })
                        .catch((error) => {
                            this.moreItems = false;
                            this.$log.error(error);
                        })
                        .finally(() => {
                            this.$scope.$broadcast('scroll.infiniteScrollComplete');
                            this.$scope.$broadcast('scroll.resize');
                        });

                }, 1000);
        }
     
       moreDataExists(): boolean {
              return this.moreItems;
        }
        
       doRefresh() {
                   this.$timeout(() => {
                   this.loadPosts();
                    //Stop the ion-refresher from spinning
                    this.$scope.$broadcast('scroll.refreshComplete');
                }, 1000);
        }
        
       getMediaInfo(data: any): any {
             var val = [];
                angular.forEach(data, function(value, key) {
                    var id = value.featured_image;
                    if (id !== 0) {
                        this.$log.log('loading image', id);

                        var imgUrl = '';
                        this.postsService.getPostsMedia(id).then(function(data) {
                            imgUrl = data.guid.rendered;
                            value.mediaUrl = imgUrl;
                            console.log('image url ', imgUrl);
                            val.push(value);
                        });
                       
                    }


                });
                return val;
        }
    }

    angular
        .module(kdc.constants.posts)
        .controller(PostsController.ID, PostsController);

};