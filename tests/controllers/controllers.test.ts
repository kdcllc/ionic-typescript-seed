/// <reference path="../tests.d.ts" />
module app.controllers.test {

    describe('TabsCtrl Tests', () => {
        var scope: any;

        beforeEach(() => {
            angular.mock.module('kdc.controllers');
        });

        it('should have title to be tabs', () => {
            angular.mock.inject(($rootScope: ng.IRootScopeService, $controller: ng.IControllerService) => {
                scope = $rootScope.$new();
                $controller('TabsCtrl', { $scope: scope });

            });
            expect(scope.title).toEqual('Tabs');
        });

    });

    describe('IntroCtrl Tests', () => {

        var controller = <IIntroModel>{};

        beforeEach(() => {
            angular.mock.module('kdc');
                       
            var stateMock = jasmine.createSpyObj('$state', ['go']);
            var historyMock = jasmine.createSpyObj('$ionicHistory', ['nextViewOptions']);
            var slideBoxMock = jasmine.createSpyObj('$ionicSlideBoxDelegate', ['next']);

            historyMock.nextViewOptions.disable = true;
            controller = new IntroCtrl(stateMock, historyMock, slideBoxMock, 'Intro', 1);

        });

        it('should have slideIndex to be 1', () => {
            expect(controller.slideIndex).toEqual(1);
        });

        it('should have tile to be Intro', () => {
            expect(controller.title).toEqual('Intro');
        });

        it('should have next to be called', () => {
            expect(controller.next()).toHaveBeenCalled;
        });

    });
}