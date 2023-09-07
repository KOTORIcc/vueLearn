<template>
  <div>
    <div class="container">
      <HomeCategory></HomeCategory>
      <HomeBanner></HomeBanner>
    </div>
    <HomeNew></HomeNew>
    <HomeHot></HomeHot>
    <HomeProduct></HomeProduct>

  </div>
</template>

<script>
import HomeCategory from "@/views/Layout/Home/components/HomeCategory.vue";
import HomeProduct from "@/views/Layout/Home/components/HomeProduct.vue";
import HomeBanner from "@/views/Layout/Home/components/HomeBanner.vue";
import HomeNew from "@/views/Layout/Home/components/HomeNew.vue";
import HomeHot from "@/views/Layout/Home/components/HomeHot.vue";

export default {
  name: "index",
  components:{
    HomeCategory,
    HomeBanner,
    HomeNew,
    HomeHot,
    HomeProduct,

  }
}
</script>

<style scoped>

</style>
