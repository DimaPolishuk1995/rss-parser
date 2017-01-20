'use strict';

rssFeedApp
    .controller('ListNewsCtrl', function ($scope, $http, $rootScope, FeedService, ArrayService, TimeParse, $sce) {

        $scope.feedSrc = FeedService.getUrl();
        $scope.news = ArrayService.getArrayNews();

        var filter = $sce.trustAsResourceUrl($scope.feedSrc);

        $http.get(filter).then(function (response) {
            var x2js = new X2JS();
            var aftCnv = x2js.xml_str2json(response.data);

            $scope.feeds = aftCnv.rss.channel.item;

            for (var i = 0, len = $scope.feeds.length; i < len; i++) {
                $scope.feeds[i].pubDate = TimeParse($scope.feeds[i].pubDate);
            }
        });

        $scope.loadFeed = function () {
            FeedService.setUrl($scope.feedSrc);
            var filter = $sce.trustAsResourceUrl($scope.feedSrc);

            $http.get(filter).then(function (response) {
                var x2js = new X2JS();
                var aftCnv = x2js.xml_str2json(response.data);

                $scope.feeds = aftCnv.rss.channel.item;

                for (var i = 0, len = $scope.feeds.length; i < len; i++) {
                    $scope.feeds[i].pubDate = TimeParse($scope.feeds[i].pubDate);
                }
            });
        };
    });
