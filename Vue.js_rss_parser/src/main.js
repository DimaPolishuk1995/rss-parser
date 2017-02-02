var Vue = require('vue');
var VueRouter = require('vue-router');
var VueResource = require('vue-resource');

var ListNews = require('./views/ListNews.vue');
var Post = require('./views/Post.vue');

Vue.use(VueRouter);
Vue.use(VueResource);

var router = new VueRouter({
    routes: [
        {path: '/', component: ListNews},
        {path: '/post/:id', name: 'post', component: Post}
    ]
});

new Vue({
    el: '#app',
    router: router
});