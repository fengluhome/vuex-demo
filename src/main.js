
import Vue from 'vue';
import Vuex from "vuex"
import {routerStart} from './js/init/router';
import * as util from './js/util/index';
Vue.use(Vuex)

/**
 * 全局注册
 */
window.TD = {
  util: util
};





routerStart();









