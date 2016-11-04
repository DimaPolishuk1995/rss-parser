App.controller('ViewNewsCtrl', ['$scope', '$state', '$stateParams', '$http', '$timeout', '$rootScope', 'FeedService', 'TimeParse',
    function ($scope, $state, $stateParams, $http, $timeout, $rootScope, FeedService, TimeParse) {

        $scope.loader = true;

        $scope.feedSrc = FeedService.getUrl();

        $timeout(function () {
            $http.get($scope.feedSrc).success(function (data) {
                var id = $stateParams.id;
                $scope.feeds = data.rss.channel.item[id];
                $scope.time = TimeParse(data.rss.channel.item[id].pubDate.__cdata);
                $scope.content = $scope.feeds.image.__cdata.split('src="')[1].split('">')[0];
            });
            $scope.loader = false;
        }, 1500);
    }]);