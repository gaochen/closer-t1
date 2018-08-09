import Vue from 'vue';
import Router from 'vue-router';
import api from './utils/api';
import { compareVersion, isApp } from './utils'
import Store from './store';
import { Toast } from 'mint-ui'

const Comment = () =>
    import ('@/pages/comment/index')

// 长图文
const Article = () =>
    import ('@/pages/article/index/index')

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [{
        path: '/article/:id',
        name: 'article',
        component: Article,
    }, {
        path: '/comment/:sid',
        name: 'comment',
        component: Comment,
    }]

})
router.beforeEach(({
    meta,
    path,
    query,
    name,
    params
}, from, next) => {
    document.title = meta.title ? meta.title : '贴近';
    let ua = navigator.userAgent || window.navigator.userAgent;
    ua = ua.toLowerCase();
    Store.state.UA = ua;
    Store.state.V_1_2 = compareVersion(ua);
    Store.state.IS_APP = isApp(ua);
    next();
})

export default router