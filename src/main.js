/**
 * Created by zongchaoyang on 2017/4/25.
 */
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App.vue'
import home from './component/Home.vue'
import nearby from './component/Nearby.vue'
import order from './component/Order.vue'
import perpersonalcenter from "./component/PersonalCenter.vue"
import goods from "./component/Goods.vue"

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
    routes: [
        {path: '/', component: home},
        {path: '/home', component: home},
        {path:'/nearby',component:nearby},
        {path:'/order',component:order},
        {path:'/perpersonalcenter',component:perpersonalcenter},
        {path:'/goods/:orgid',component:goods}
    ]
})

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
})
