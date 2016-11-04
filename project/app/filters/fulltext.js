App.filter('trusted', ['$sce', function ($sce) {
    return $sce.trustAsHtml;
}]);
