<style scoped>
    .bs-example {
        width: 200px;
        float: left;
        position: relative;
        padding: 45px 15px 15px;
        margin: 0 -15px 15px;
        margin-right: 0;
        margin-left: 0;
        background-color: #fff;
        border-color: #ddd;
        border-width: 1px;
        border-radius: 4px 4px 0 0;
        -webkit-box-shadow: none;
        box-shadow: none;
    }
</style>
<template>
    <div>
        <div class="bs-example">
            <h1>组件2</h1>
            {{name.val}}
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
