<template>
    <div class="post" v-if="news">
        <img :src="news.enclosure._url" alt="">
        <h2>{{news.title }}</h2>
        <p v-html="news.fulltext"></p>
    </div>
</template>

<script>
    var posts = require('../posts');
    var xmlToJSON = require('x2js');

    module.exports = {
        data: function () {
            return {
                news: null,
                allNews: [],
                posts: posts
            }
        },
        methods: {
            getAllPosts: function () {
                var endpoint = this.$route.params.endpoint;
                this.$http.get(endpoint).then(function (response) {
                    var x2js = new xmlToJSON();
                    var parseXml = x2js.xml2js(response.body);
                    var newsId = this.$route.params.id;
                    this.news = parseXml.rss.channel.item[newsId];
                }, function (error) {
                    console.log(error)
                });
            }
        },
        created: function () {
            this.getAllPosts();
        }
    }
</script>