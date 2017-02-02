'use strict';

rssFeedApp
    .config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
        function ($locationProvider, $stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('listNews', {
                    url: '/',
                    controller: 'ListNewsCtrl',
                    templateUrl: 'views/listNews.html'
                })
                .state('view-news', {
                    url: '/:id',
                    controller: 'ViewNewsCtrl',
                    templateUrl: 'views/viewNews.html'
                });
        }]);
