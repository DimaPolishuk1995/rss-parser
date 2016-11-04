App.controller('ListNewsCtrl', ['$scope', '$http', '$rootScope', 'FeedService', 'ArrayService', function ($scope, $http, $rootScope, FeedService, ArrayService) {

    $scope.feedSrc = FeedService.getUrl();
    $scope.news = ArrayService.getArrayNews();
    $http.get($scope.feedSrc).success(function (data) {
        $scope.feeds = data.rss.channel.item;
    });

    $scope.loadFeed = function () {
        FeedService.setUrl($scope.feedSrc);
        $http.get($scope.feedSrc).success(function (data) {
            $scope.feeds = data.rss.channel.item;
        });
    };
}]);
