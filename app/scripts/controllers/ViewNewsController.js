'use strict';

rssFeedApp
    .controller('ViewNewsCtrl', function ($scope, $state, $stateParams, $http, $timeout, $rootScope, FeedService, TimeParse) {

        $scope.loader = true;

        $scope.feedSrc = FeedService.getUrl();

        $timeout(function () {
            $http({
                method: "GET",
                url: $scope.feedSrc
            }).then(function mySucces(response) {
                var id = $stateParams.id;
                $scope.feeds = response.data.rss.channel.item[id];
                $scope.time = TimeParse(response.data.rss.channel.item[id].pubDate);
                $scope.content = $scope.feeds.enclosure._url;

            }, function myError(response) {
                $scope.feeds = response.statusText;
            });
            $scope.loader = false;
        }, 1500);
    });