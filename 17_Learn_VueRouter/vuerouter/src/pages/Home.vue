<template>
  <div>
    <h2>Home Page</h2>
    <router-link to="/Home/Message">信息</router-link>
    <router-link to="/Home/Shop">商品</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  created() {
    console.log(this.$route);
  }
}
</script>

<style scoped>

</style>
