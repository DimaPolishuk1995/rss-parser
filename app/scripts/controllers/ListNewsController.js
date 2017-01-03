'use strict';

rssFeedApp
    .controller('ListNewsCtrl', function ($scope, $http, $rootScope, FeedService, ArrayService, TimeParse) {

        $scope.feedSrc = FeedService.getUrl();
        $scope.news = ArrayService.getArrayNews();

        $http({
            method: "GET",
            url: $scope.feedSrc
        }).then(function mySucces(response) {
            $scope.feeds = response.data.rss.channel.item;

            for (var i = 0, len = $scope.feeds.length; i < len; i++) {
                $scope.feeds[i].pubDate.__cdata = TimeParse($scope.feeds[i].pubDate.__cdata);
            }
        }, function myError(response) {
            $scope.feeds = response.statusText;
        });

        $scope.loadFeed = function () {
            FeedService.setUrl($scope.feedSrc);

            $http({
                method: "GET",
                url: $scope.feedSrc
            }).then(function mySucces(response) {
                $scope.feeds = response.data.rss.channel.item;

                for (var i = 0, len = $scope.feeds.length; i < len; i++) {
                    $scope.feeds[i].pubDate.__cdata = TimeParse($scope.feeds[i].pubDate.__cdata);
                }
            }, function myError(response) {
                $scope.feeds = response.statusText;
            });

        };
    });
