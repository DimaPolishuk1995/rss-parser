'use strict';

rssFeedApp
    .config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
        function ($locationProvider, $stateProvider, $urlRouterProvider) {

            $locationProvider.html5Mode(true);
            $locationProvider.hashPrefix('!');
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

                })
        }]);
