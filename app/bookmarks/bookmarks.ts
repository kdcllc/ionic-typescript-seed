module kdc.bookmarks {

    export interface IBookmarksScope {

    }

    export class BookmarksController implements IBookmarksScope {
        
        static $inject = [kdc.services.BookmarkService.ID];
        public static ID = kdc.constants.bookmarks + '.BookmarksController';
        
        constructor(private bookmarkService: kdc.services.IBookmarkService) {
            
        }
    }

    angular
        .module(kdc.constants.bookmarks)
        .controller(BookmarksController.ID, BookmarksController);
        
}