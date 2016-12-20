/**
 * Created by lu on 2016/12/19.
 */
export default {
  getHistroy(state, id){
    return state.componentsHistory.filter((item) => {
      return item.id == id;
    })
  },


}