<template>
  <h3>{{title}}</h3>
  <h4>{{content}}</h4>
</template>

<script>
export default {
  name: "ChildComponent",
  data(){
    return{
      message:'1234566',
    }
  },
  props:['title','content']
}
</script>

<style scoped>

</style>
