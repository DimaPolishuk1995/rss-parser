'use strict';

rssFeedApp
    .controller('ListNewsCtrl', function ($scope, $http, $rootScope, FeedService, ArrayService, TimeParse, $sce) {

        $scope.feedSrc = FeedService.getUrl();
        $scope.news = ArrayService.getArrayNews();

        var url = 'http://ajax.googleapis.com/ajax/services/feed/load' +
            '?v=1.0&num=100&output=xml&q=' + $scope.feedSrc;

        var filter = $sce.trustAsResourceUrl(url);

        $http.jsonp(filter, {callback: 'JSON_CALLBACK'}).then(function mySucces(response) {
            var x2js = new X2JS();
            var aftCnv = x2js.xml_str2json(response.data.responseData.xmlString);

            $scope.feeds = aftCnv.rss.channel.item;

            for (var i = 0, len = $scope.feeds.length; i < len; i++) {
                $scope.feeds[i].pubDate = TimeParse($scope.feeds[i].pubDate);
            }
        }, function myError(response) {
            $scope.feeds = response.statusText;
        });

        $scope.loadFeed = function () {
            FeedService.setUrl($scope.feedSrc);
            var url = 'http://ajax.googleapis.com/ajax/services/feed/load' +
                '?v=1.0&num=100&output=xml&q=' + $scope.feedSrc;
            var filter = $sce.trustAsResourceUrl(url);

            $http.jsonp(filter, {callback: 'JSON_CALLBACK'}).then(function mySucces(response) {
                var x2js = new X2JS();
                var aftCnv = x2js.xml_str2json(response.data.responseData.xmlString);

                $scope.feeds = aftCnv.rss.channel.item;

                for (var i = 0, len = $scope.feeds.length; i < len; i++) {
                    $scope.feeds[i].pubDate = TimeParse($scope.feeds[i].pubDate);
                }
            }, function myError(response) {
                $scope.feeds = response.statusText;
            });

        };
    });
