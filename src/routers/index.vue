<style>
  @import "../styles/layout.css";
  @import "../styles/iconfont.css";
  @import "../styles/chart.css";
</style>
<template>
  <div>
    <h1 style="text-align: center">
      <button @click="pre">后退</button>
      <button @click="next">前进</button>
      <button @click="save">保存状态</button>
      <sapn>记录条数{{componentsHistory.length}}</sapn>
    </h1>
    <penal ref="chart"></penal>
    <history></history>
  </div>
</template>

<script>
  import penal from './penal.vue'
  import  history from './history.vue'
  export default{
    data(){
      return {
        selectIndex: 0,
        componentsHistory: this.$store.state.chart.componentsHistory,
      }
    },
    watch: {
      'componentsHistory': function () {
        this.selectIndex = this.componentsHistory.length - 1;
      }
    },
    methods: {
      pre: function () {
        debugger
        if (this.selectIndex - 1 < 0) return;
        var info = this.componentsHistory[--this.selectIndex]
        this.$refs.chart.setStatus(info);
      },
      next: function () {
        debugger
        if (this.selectIndex + 1 > this.componentsHistory.length - 1)return;
        var info = this.componentsHistory[++this.selectIndex];
        this.$refs.chart.setStatus(info);
      },
      save: function () {
        var data = JSON.parse(JSON.stringify(this.$refs.chart.$data));
        data.id = new Date().valueOf();
        this.$store.commit("add", data)
      }
    },
    components: {
      penal: penal,
      history: history
    }
  }
</script>
