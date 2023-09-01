<template>
  <div>
    Home Page
    <h2>{{name}}</h2>
    <h2>{{counter}}</h2>
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  name: "Home",
  setup(){
    const name = inject('name')
    const counter = inject('counter')

    return{
      name,
      counter
    }


  }
}
</script>

<style scoped>

</style>
