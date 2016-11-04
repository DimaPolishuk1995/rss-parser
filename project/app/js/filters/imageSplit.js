App.filter('imgSplit', function () {

    return function (content) {
        return content = content.split('src="')[1].split('">')[0];
    }
});