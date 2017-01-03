'use strict';

rssFeedApp
    .factory('FeedService', function () {
        var _url = 'http://k.img.com.ua/rss/ru/news.xml';

        return {
            setUrl: function (url) {
                _url = url;
            },
            getUrl: function () {

                return _url;
            }
        };
    });