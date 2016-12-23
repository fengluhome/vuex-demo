<template>
  <div>
    <components-a></components-a>
    <components-b></components-b>
    <components-c></components-c>
  </div>

</template>
<style>

</style>
<script>
  import a from './a.vue'
  import b from './b.vue'
  import c from './c.vue'
  export default{
    data(){
      return {}
    },
    components: {
      "components-a": a,
      "components-b": b,
      "components-c": c
    }
  }
</script>
