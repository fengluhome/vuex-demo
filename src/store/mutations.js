/**
 * Created by lu on 2016/12/19.
 */
export default {
  'componentsHistory-add' (state, n) {
    // 变更状态
    //debugger
    state.chart.id.val = n.id;

    state.chart.componentsHistory.push(JSON.parse(JSON.stringify(n)));
    state.chart.selectIndex = state.chart.componentsHistory.length - 1;
  },
  setId(state, id){
    state.id.val = id;
  },


}