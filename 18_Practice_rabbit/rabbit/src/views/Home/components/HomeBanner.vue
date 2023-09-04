<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in BannerStore.PictureList" :key="item">
        <img :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import { useBannerStore } from "@/stores/banner.js";

export default {
  name: "HomeBanner",
  setup(){
    useBannerStore().getBanner()
    const BannerStore = useBannerStore()
    console.log(BannerStore);
    return{
      BannerStore
    }
  }

}
</script>

<style scoped lang="scss">
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>
