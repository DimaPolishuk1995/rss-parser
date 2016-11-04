App.filter('time', function () {

    return function (publishedDate) {
        var timestamp = Date.parse(publishedDate);
        var dateFormatted = new Date(timestamp);
        var monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];

        var day = dateFormatted.getDate();
        var month = dateFormatted.getMonth();
        var year = dateFormatted.getFullYear();
        var minutes = dateFormatted.getMinutes();
        var hours = dateFormatted.getHours();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;

        return day + ' ' + monthNames[month] + ' ' + year + ' ' + hours + ':' + minutes + ' ' + ampm;
    }
});