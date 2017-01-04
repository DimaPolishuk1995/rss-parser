'use strict';

rssFeedApp
    .factory('ArrayService', function () {

        var news = [
            {title: 'Все новости', url: 'https://www.rbc.ua/static/rss/all.rus.rss.xml'},
            {title: 'Главные новости', url: 'https://www.rbc.ua/static/rss/ukrnet.strong.rus.rss.xml'},
            {title: 'Политика', url: 'https://www.rbc.ua/static/rss/ukrnet.politics.rus.rss.xml'},
            {title: 'Экономика', url: 'https://www.rbc.ua/static/rss/ukrnet.economic.rus.rss.xml'},
            {title: 'Происшествия', url: 'https://www.rbc.ua/static/rss/ukrnet.accidents.rus.rss.xml'},
            {title: 'Культура', url: 'https://www.rbc.ua/static/rss/ukrnet.culture.rus.rss.xml'},
            {title: 'Спорт', url: 'https://www.rbc.ua/static/rss/ukrnet.sport.rus.rss.xml'},
            {title: 'Дайджест', url: 'https://www.rbc.ua/static/rss/digests.rus.rss.xml'}
        ];

        return {
            getArrayNews: function () {

                return news;
            }
        }
    });