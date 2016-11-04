App.controller('ListNewsCtrl', ['$scope', '$http', '$rootScope', 'FeedService', 'ArrayService','TimeParse',
    function ($scope, $http, $rootScope, FeedService, ArrayService, TimeParse) {

    $scope.feedSrc = FeedService.getUrl();

    $scope.news = ArrayService.getArrayNews();

    $http.get($scope.feedSrc).success(function (data) {
        $scope.feeds = data.rss.channel.item;

        for (var i=0, len=$scope.feeds.length; i<len; i++) {
            $scope.feeds[i].pubDate.__cdata = TimeParse($scope.feeds[i].pubDate.__cdata);
        }
    });

    $scope.loadFeed = function () {
        FeedService.setUrl($scope.feedSrc);

        $http.get($scope.feedSrc).success(function (data) {
            $scope.feeds = data.rss.channel.item;

            for (var i=0, len=$scope.feeds.length; i<len; i++) {
                $scope.feeds[i].pubDate.__cdata = TimeParse($scope.feeds[i].pubDate.__cdata);
            }
        });
    };
}]);
