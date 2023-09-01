<template>
  <div>
    <h2 v-format-time="'YYYY/MM/DD'">{{timestamp}}</h2>
  </div>
</template>

<script>


import {ref} from "vue";

export default {
  name: "App",
  setup(){
    const timestamp = 1692369285000


    return{
      timestamp
    }


  },
  directives: {

  }

}
</script>

<style scoped>

</style>
