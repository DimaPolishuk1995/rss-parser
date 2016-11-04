'use strict';

App.config(['parameters', '$locationProvider', '$stateProvider', '$urlRouterProvider',
    function (parameters, $locationProvider, $stateProvider, $urlRouterProvider) {

        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('listNews', {
                url: '/',
                controller: 'ListNewsCtrl',
                templateUrl: 'listNews/listNews.html'
            })
            .state('view-news', {
                url: '/:id',
                controller: 'ViewNewsCtrl',
                templateUrl: 'viewNews/viewNews.html'

            })
    }]);
