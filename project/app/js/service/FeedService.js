App.factory('FeedService', function () {
    var _name = '';
return {
    setName: function (name) {
        _name = name;
    },
    getName: function () {
        return _name;
    }
}
});