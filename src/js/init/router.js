/**
 * Created by lu on 2016/9/27.
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from "vuex"

import elmain from '../../components/frame/elmain.vue';
import {setTD} from './../util/index';
import store from './../../store/index';
Vue.use(VueRouter);


// // 路由配置
var router = new VueRouter({
  routes: [
    {
      path: '/index',
      component: function (resolve) {
        require(['./../../routers/index.vue'], resolve);
      }
    },
    {
      path: '/index2',
      component: function (resolve) {
        require(['../../routers/demo/index.vue'], resolve);
      }
    },

    {
      path: "*", redirect: "/index"
    }

  ]
});


//开启路由
export function routerStart() {
  new Vue({
    components: {app: elmain},
    router: router,
    store,
  }).$mount('#app');

}

