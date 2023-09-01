<template>
  <div>
    <h2>Base Page</h2>
  </div>
</template>

<script>
export default {
  name: "BasePage",
  data(){
    return{
      title:'hello Base Page'
    }
  },
  methods:{
    bar(){
      console.log('base page here!');
    }
  }
}
</script>

<style scoped>

</style>
