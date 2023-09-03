<template>
  <div>
    <router-view></router-view>
    <div class="test">
      test scss
    </div>
    <el-button type="primary">Hello</el-button>
  </div>

</template>

<script>
export default {
  name: "App"
}
</script>

<style scoped lang="scss">
 .test{
    color: $priceColor
 }
</style>
