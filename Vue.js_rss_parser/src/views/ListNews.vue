<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div class="blog">
        <div class="select">
            <select v-model="endpoint" @click="getAllPosts()">
                <option v-for="item in posts" v-bind:value="item.url">{{item.title}}</option>
            </select>
        </div>
        <div class="container">
            <ul class="unstyled">
                <li class="item" v-for="(news, index) in allNews">
                    <img :src="news.enclosure._url" alt="">
                    <h5><a href="#">{{news.title}}</a></h5>
                    <span class="small">{{news.pubDate}}</span>
                    <router-link :to="{ name: 'post', params: { id: index, endpoint:endpoint}}" class="button">Читать даллее</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    var posts = require('../posts');
    var xmlToJSON = require('x2js');

    module.exports = {
        data: function () {
            return {
                posts: posts,
                endpoint: 'https://www.rbc.ua/static/rss/all.rus.rss.xml',
                allNews: []
            }
        },
        methods: {
            getAllPosts: function () {
                this.$http.get(this.endpoint).then(function (response) {
                    var x2js = new xmlToJSON();
                    var parseXml = x2js.xml2js(response.body);
                    this.allNews = parseXml.rss.channel.item;
                }, function (error) {
                    console.log(error)
                });
            }
        },
        created: function () {
            this.getAllPosts()
        }
    }
</script>

<style>
    body {
        margin: 0;
    }

    .small {
        font-size: 11px;
        margin-bottom: 5px;
    }

    button {
        padding: 1px 5px;
        font-size: 13px;
        line-height: 1.5;
        border-radius: 3px;
        color: #fff;
        background-color: #2c3e50;
        border-color: #2c3e50;
    }

    h4 {
        font-size: 2em;
        text-align: center;
        border-bottom: 1px solid #CCC;
        margin-bottom: 10px;
        margin-top: 0;
        background: #2c3e50;
        color: #fff;
        height: 40px;
        padding: 20px;
    }

    .button {
        display: block;
        margin-top: 10px;
    }

    span.badge {
        margin: 10px 0;
        display: inherit;
        text-align: center;
    }

    li.item, li.itemView {
        display: block;
        width: calc(32% - 10px);
        padding: 0;
        background-color: #EFEFEF;
        margin-bottom: 20px;
        border-radius: 5px;
        border-left: 3px solid #EFEFEF;
        border-right: 3px solid #EFEFEF;
        text-align: center;
        float: left;
        margin-right: 10px;
        height: 400px;
    }

    li.itemView {
        width: 100%;
        height: auto;
    }

    li.item, li.itemView:hover {
        border-color: #f89406;
        background-color: #EEEEEE;
    }

    li.item h5, li.itemView h5, li.item p, li.itemView p {
        padding-top: 0;
        margin-top: 0;
    }

    li.item img, .itemView img {
        display: inline-block;
        width: 100%;
        max-width: 500px;
        height: 250px;
        margin-top: 20px;
    }

    .unstyled {
        width: calc(100% - 110px);
        padding: 0px 45px 0 65px;
    }

    .select {
        width: 100%;
        text-align: center;
    }

    input {
        width: 100%;
        max-width: 500px;
    }

    form {
        text-align: center;
    }

    .search input {
        border: none;
    }

    .search .input {
        width: 100%;
        padding: 8px 37px 9px 15px;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1), inset 0 1px 2px rgba(0, 0, 0, 0.3);
        border-radius: 20px;
        background: #EEE;
        font: 13px Tahoma, Arial, sans-serif;
        color: #555;
        outline: none;
    }

    .search .input:focus {
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2), inset 0 1px 2px rgba(0, 0, 0, 0.4);
        background: #E8E8E8;
        color: #333;
    }

    input[type="search"] {
        -webkit-appearance: none;
    }

    select {
        width: auto;
        height: 26px;
        border-radius: 10px;
        -webkit-appearance: none;
        line-height: 1em;
        -moz-appearance: none;
        text-indent: 0.01px;
        text-overflow: '';
        -ms-appearance: none;
        appearance: none !important;
        margin: 20px auto;
        font-size: 20px;
        padding: 0px 0 4px 40px;
    }

    select::-ms-expand {
        display: none;
    }

    svg {
        margin: 0 auto;
        width: 100%;
        padding-top: 40vh;
        height: 150px;
    }

    @media screen and (max-width: 767px) {
        li.item, li.itemView:hover {
            width: 100%;
        }

        .unstyled {
            width: calc(100% - 45px);
            padding: 0px 15px 0 20px;
        }
    }
</style>