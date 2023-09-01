<template>
  <div>
    <h2>Page Not Found</h2>
    <p>路径不存在，傻逼</p>
    <h1>{{this.$route.params.pathMatch}}</h1>
  </div>
</template>

<script>
export default {
  name: "NotFound"
}
</script>

<style scoped>

</style>
