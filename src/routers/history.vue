<template>
  <div style="clear: both">
    <h1>操作历史</h1>

    <penal v-for="(item,index) in list" :item="item" style=" float: left;"></penal>
  </div>
  </div>
</template>
<style>

</style>
<script>
  import penal from './penal.vue'
  import  Vue from 'vue';
  export default{
    data(){
      return {
        list: this.$store.state.chart.componentsHistory,

      }
    },
    watch: {
      'id': function () {
        // debugger
//        Vue.nextTick(() => {
//
//          this.$children.forEach((item)=>{
//            item.setStatus()
//          })
//        });
      }
    },
    components: {
      penal: penal
    }
  }
</script>
