/**
 * Created by lu on 2016/11/18.
 */

import Vue from 'vue';
import Vuex from "vuex"
import chart from "./modules/charts";
import mutations from "./modules/mutations";
import getters from "./modules/getters";
Vue.use(Vuex);
const state = {
  chart
};
// debugger
export default  new Vuex.Store({
  state,
  getters,
  mutations
});