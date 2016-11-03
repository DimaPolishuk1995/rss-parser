App.controller("HomepageCtrl", ['$scope', '$http', '$rootScope','FeedService', function ($scope, $http, $rootScope,FeedService) {
    $rootScope.feedSrc  = 'http://k.img.com.ua/rss/ru/news.xml';
    $http.get($rootScope.feedSrc ).success(function (data) {
        $scope.feeds = data.rss.channel.item;
    });

    $scope.loadFeed = function () {
        FeedService.setName($scope.feedSrc);
        $http.get($scope.feedSrc).success(function (data) {
            $scope.feeds = data.rss.channel.item;
        });
    };

    $scope.news = [
        {title: 'Все новости', url: 'http://k.img.com.ua/rss/ru/news.xml'},
        {title: 'Картина дня', url: 'http://k.img.com.ua/rss/ru/mainbyday.xml'},
        {title: 'Новости Бизнеса', url: 'http://k.img.com.ua/rss/ru/news.xml'},
        {title: 'Новости Украины', url: 'http://k.img.com.ua/rss/ru/ukraine.xml'},
        {title: 'Наука и медецина', url: 'http://k.img.com.ua/rss/ru/tech.xml'},
        {title: 'Новости спорта', url: 'http://k.img.com.ua/rss/ru/sport.xml'},
        {title: 'Хорошие новости', url: 'http://k.img.com.ua/rss/ru/good_news.xml'}
    ];
}]);
