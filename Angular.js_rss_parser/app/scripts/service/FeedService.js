'use strict';

rssFeedApp
    .factory('FeedService', function () {
        var _url = 'https://www.rbc.ua/static/rss/all.rus.rss.xml';

        return {
            setUrl: function (url) {
                _url = url;
            },
            getUrl: function () {

                return _url;
            }
        };
    });