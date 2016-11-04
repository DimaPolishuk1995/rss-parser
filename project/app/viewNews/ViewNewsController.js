App.controller('ViewNewsCtrl', ['$scope', '$state', '$stateParams', '$http', '$timeout', '$rootScope', 'FeedService',
    function ($scope, $state, $stateParams, $http, $timeout, $rootScope, FeedService) {

        $scope.loader = true;
        $scope.feedSrc = FeedService.getUrl();
        $timeout(function () {
            $http.get($scope.feedSrc).success(function (data) {
                var id = $stateParams.id;
                $scope.feeds = data.rss.channel.item[id];
                $scope.content = $scope.feeds.image.__cdata.split('src="')[1].split('">')[0];
            });
            $scope.loader = false;
        }, 1500);
    }]);