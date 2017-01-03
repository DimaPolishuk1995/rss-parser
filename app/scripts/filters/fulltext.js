'use strict';

rssFeedApp
    .filter('trusted', function ($sce) {
        return $sce.trustAsHtml;
    });
