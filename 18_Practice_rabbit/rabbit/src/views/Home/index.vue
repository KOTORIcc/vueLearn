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
import HomeCategory from "@/views/Home/components/HomeCategory.vue";
import HomeProduct from "@/views/Home/components/HomeProduct.vue";
import HomeBanner from "@/views/Home/components/HomeBanner.vue";
import HomeNew from "@/views/Home/components/HomeNew.vue";
import HomeHot from "@/views/Home/components/HomeHot.vue";

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
