module kdc.services {
    'use strict';
   
    export interface IBookmarkService {
        set(id: string): any;
        get(id: string): any;
        check(id: string): boolean;
        remove(id: string): void;

    }

   export class BookmarkService implements IBookmarkService {
        
        bookmarkCache: ng.ICacheObject;
        public static ID = kdc.constants.services +  '.BookmarkService';
        
        constructor(private cacheFactory: ICacheFactory) {
            if (!cacheFactory.get('bookmarkCache')) {
              this.bookmarkCache = cacheFactory.createCache('bookmarkCache');
            } else {
                this.bookmarkCache = cacheFactory.get('bookmarkCache');
            }

        }

        set(id: string) {
            console.log('set cached id', id);
            return this.bookmarkCache.put(id, 'bookmarked');
        }

        get(id: string): any {
            console.log('get cached id', id);
            return this.bookmarkCache.get( id );
        }

        check(id: string): any {
            return true;
            //   var keys = this.bookmarkCache.keys();
            //     var index = keys.indexOf(id);
            //     if(index >= 0) {
            //         return true;
            //     } else {
            //         return false;
            //     }
        }

        remove(id: string): void {
            console.log('remove cached id', id);
            this.bookmarkCache.remove(id);
        }
    }

    factory.$inject = [
        'CacheFactory'
    ];

    function factory(cacheFactory: ICacheFactory) {
        return new BookmarkService(cacheFactory);
    }

    angular
        .module(kdc.constants.services)
        .factory(BookmarkService.ID,
        factory);
}