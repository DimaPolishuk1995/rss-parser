'use strict';

var rssFeedApp = angular.module('rssFeedApp', [
    'ui.router',
    'ui.router.util',
    'ui.router.compat',
    'xml',
    'ngResource',
    'ngRoute'
])

    .config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        $httpProvider.interceptors.push('xmlHttpInterceptor');
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
    ]);