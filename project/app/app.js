var App = angular.module('RSSFeedApp', [
    'ui.router',
    'ui.router.util',
    'ui.router.compat',
    'app.config',
    'xml',
    'ngResource'
])

.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.interceptors.push('xmlHttpInterceptor');
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}
]);