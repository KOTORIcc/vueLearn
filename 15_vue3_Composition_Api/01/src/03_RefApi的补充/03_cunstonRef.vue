<template>
  <div>
    <input type="text" v-model="myRef">
    <h2>{{myRef}}</h2>
  </div>
</template>

<script>
import { ref } from 'vue'
import bounceRef from "@/03_RefApi的补充/hook/bounceRef";
export default {
  name: "App",

  setup(){
    // const message = ref('Hello World')
    const myRef = bounceRef('custom Ref here', 1000)
    return{
      myRef
    }
  }
}
</script>

<style scoped>

</style>
