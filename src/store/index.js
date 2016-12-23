/**
 * Created by lu on 2016/11/18.
 */

import Vue from 'vue';
import Vuex from "vuex"
import chart from "./modules/charts";
import demo from "./modules/demo";
import mutations from "./mutations";
import getters from "./getters";
Vue.use(Vuex);
const state = {
  chart,
  demo
};
// debugger
export default  new Vuex.Store({
  state,
  getters,
  mutations,
});