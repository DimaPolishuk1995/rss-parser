'use strict';

rssFeedApp
    .controller('ViewNewsCtrl', function ($scope, $state, $stateParams, $http, $timeout, $rootScope, FeedService, TimeParse,$sce) {

        $scope.loader = true;

        $scope.feedSrc = FeedService.getUrl();
        var filter = $sce.trustAsResourceUrl($scope.feedSrc);

        $timeout(function () {
            $http.get(filter).then(function (response) {
                var id = $stateParams.id;
                var x2js = new X2JS();
                var aftCnv = x2js.xml_str2json(response.data);

                $scope.feeds = aftCnv.rss.channel.item[id];
                $scope.time = TimeParse(aftCnv.rss.channel.item[id].pubDate);
                $scope.content = $scope.feeds.enclosure._url;

                for (var i = 0, len = $scope.feeds.length; i < len; i++) {
                    $scope.feeds[i].pubDate = TimeParse($scope.feeds[i].pubDate);
                }
            }, function myError(response) {
                $scope.feeds = response.statusText;
            });
            $scope.loader = false;
        }, 1500);
    });