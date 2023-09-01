<template>
  <div>
    <h2>About page {{name}}---{{age}}</h2>
    <button @click="add">{{counter}}</button>
  </div>
</template>

<script>
export default {
  name: "About",
  props:{
    name:{
      type:String,
    },
    age:{
      type:String,
    }
  },
  data(){
    return{
      counter:0,
    }
  },
  methods:{
    add(){
      this.counter++
    }
  }
}
</script>

<style scoped>

</style>
