'use strict';

rssFeedApp
    .factory('TimeParse', function () {

        return function (publishedDate) {
            var timestamp = Date.parse(publishedDate);

            return timestamp;
        }
    });