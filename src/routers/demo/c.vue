<style scoped>
  .bs-example {
    width: 200px;
    float: left;

    padding: 45px 15px 15px;
    margin: 0 -15px 15px;
    margin-right: 0;
    margin-left: 0;


    box-shadow: none;
  }
</style>
<template>
  <div>
    <div class="bs-example">
      <h1>组件3</h1>
      <input type="text" v-model="name.val">
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        name: this.$store.state.demo.name,
      }
    },
    components: {}
  }
</script>
