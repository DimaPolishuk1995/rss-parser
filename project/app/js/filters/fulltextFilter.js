App.filter('trusted', ['$sce', function ($sce) {
        return function (text) {
            return $sce.trustAsHtml(text.replace(/\\/g, ''));
        };
    }]);
