'use strict';

App.config([
        'parameters',
        '$locationProvider',
        '$stateProvider',
        '$urlRouterProvider',
        function (parameters,
                  $locationProvider,
                  $stateProvider,
                  $urlRouterProvider) {

            $locationProvider.html5Mode(true);
            $locationProvider.hashPrefix('!');
            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('homepage', {
                    url: '/',
                    controller: 'HomepageCtrl',
                    templateUrl: 'pages/homepage.html'
                })
                .state('view-property', {
                    url: '/:id',
                    controller: 'ViewCtrl',
                    templateUrl: 'pages/viewProperty.html'

                })
        }]);
