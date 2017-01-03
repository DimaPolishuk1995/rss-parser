'use strict';

rssFeedApp
    .filter('descriptionSplit', function () {

        return function (content) {
            return content = content.split('">')[1].split('"')[0];
        }
    });