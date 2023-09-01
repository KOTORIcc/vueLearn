<template>
  <div>
    User Page
    <h2>UserId: {{this.$route.params.userid}}</h2>
    <h2>Id: {{this.$route.params.id}}</h2>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
export default {

  name: "User",
  create() {
    console.log(this.$route);
  },
  setup() {
    //setup里没有this
    //专门提供了一个api用来使用route
    const route = useRoute();
    console.log(route.params.userid);
  }
}
</script>

<style scoped>

</style>
