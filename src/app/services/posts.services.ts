module kdc.services {
    'use strict';


    export interface IPostsService {
        getPosts(): ng.IPromise<Array<kdc.models.Posts>>;
        getPostByPage(page: number): ng.IPromise<Array<kdc.models.Posts>>;
        getById(postId: string): ng.IPromise<kdc.models.Post>;

        getPostsMedia(id: string): ng.IPromise<kdc.models.Media>;
    }

    export class PostsService implements IPostsService {
        baseUrl: string;

        postsApi: string;
        mediaApi: string;
        postsPage: string;


        moreItems: boolean;

        public static ID = kdc.constants.services + '.PostsService';

        static $inject = ['$http',
            '$q',
            '$ionicLoading',
            '$log',
            '$cordovaToast',
             kdc.services.CordovaPlugins.ID,
             kdc.blocks.ApiEndpointProvider.ID
            ];

        constructor(private http: ng.IHttpService,
            private q: ng.IQService,
            private ionicLoading: ionic.loading.IonicLoadingService,
            private LogService: ng.ILogService,
            private cordovaToast: ICordovaToastPlugin,
            private plugins: kdc.services.ICordovaPlugins,
            private apiEndpoint: kdc.blocks.IApiEndpointConfig) {

            this.baseUrl = apiEndpoint.baseUrl;

            this.postsApi = this.baseUrl + 'posts';
            this.mediaApi = this.baseUrl + 'media/';
            this.postsPage = this.baseUrl + 'posts?page=';

        }

        genericGet<T>(url: string): ng.IPromise<T> {
            var deferred: ng.IDeferred<T>;
            deferred = this.q.defer<T>();

            this.LogService.log('Loading', url);

            this.ionicLoading.show({ template: 'Loading ....' });

            this.http.get(url)
                .then(
                (response: ng.IHttpPromiseCallbackArg<any>) => {
                    this.LogService.log('Recieved:' + url, response.data, response.status);
                    this.ionicLoading.hide();
                    try {
                        this.cordovaToast = this.plugins.getToaster();
                        this.cordovaToast.showShortBottom('Data was loaded');
                    } catch (error) {
                         this.LogService.error(error);
                    }
                   

                    deferred.resolve(response.data);
                },
                (error: ng.IHttpPromiseCallbackArg<any>) => {
                    this.LogService.log('Error:' + url, error.data);
                    this.ionicLoading.hide();
                    deferred.reject(error.data);
                }
                );

            return deferred.promise;

        }

        getPosts(): ng.IPromise<Array<kdc.models.Posts>> {
            var url: string = this.postsApi;
            return this.genericGet<Array<kdc.models.Posts>>(url);
        }

        getPostByPage(page: number): ng.IPromise<Array<kdc.models.Posts>> {
            var url: string = this.postsPage + page;
            this.LogService.log('Trace: ' + url);
            return this.genericGet<Array<kdc.models.Posts>>(url);
        }

        getPostsMedia(id: string): ng.IPromise<kdc.models.Media> {
            var url: string = this.mediaApi + id;
            return this.genericGet<kdc.models.Media>(url);
        }

        getById(postId: string): ng.IPromise<kdc.models.Post> {
            var url: string = this.postsApi + '/' + postId;
            return this.genericGet(url);
        }
    }

    angular
        .module(kdc.constants.services)
        .service(PostsService.ID, PostsService);
}