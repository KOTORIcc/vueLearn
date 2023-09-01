<template>
  <div @click="divClick">
    <h2>Home Page {{name}}---{{age}}</h2>
  </div>
</template>

<script>
export default {
  name: "Home",
  props:{
    name:{
      type:String,
    },
    age:{
      type:String,
    }
  },
  emits:['PageClick'],
  methods:{
    divClick(){
      this.$emit('PageClick')
    }
  }
}
</script>

<style scoped>

</style>
