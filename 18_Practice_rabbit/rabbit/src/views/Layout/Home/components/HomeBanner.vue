<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in PictureList" :key="item">
        <img :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import {ref} from "vue";
import {getBannerAPI} from "@/apis/home";

export default {
  name: "HomeBanner",
  setup(){
    const PictureList = ref([])
    const getBanner = async () => {
      PictureList.value = (await getBannerAPI('HomePageBanner')).result
    }

    getBanner()

    return{
      PictureList
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
