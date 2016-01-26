module kdc.intro {
    'use strict';
  export interface IIntroScope {
        title: string;
        slideChanged(index: number): void;
        startApp(): void;
        next(): void;
        previous(): void;
        slideIndex: number;
    }

    export class IntroController implements IIntroScope {
        public static ID = kdc.constants.intro +  '.IntroController';
        static $inject = ['$state', '$ionicHistory', '$ionicSlideBoxDelegate'];

        constructor(private $state: ng.ILocationService,
            private $ionicHistory: ionic.navigation.IonicHistoryService,
            private $ionicSlideBoxDelegate: ionic.slideBox.IonicSlideBoxDelegate,
            public title: string,
            public slideIndex: number) {
            
            //no need to assign this vairable due to using key word this.
            //var vm = this;
            
            this.$ionicHistory.nextViewOptions({
                disableBack: true
            });
            
            this.title = 'Intro';

        }
        
        startApp = function() {
            this.$state.go('app.posts');
        };
        next = function() {
            this.$ionicSlideBoxDelegate.next();
        };
        previous = function() {
            this.$ionicSlideBoxDelegate.previous();
        };
            
        // Called each time the slide changes
        slideChanged = function(index) {
            this.slideIndex = index;
        };
    }

    angular
        .module(kdc.constants.intro)
        .controller(IntroController.ID, IntroController);

}