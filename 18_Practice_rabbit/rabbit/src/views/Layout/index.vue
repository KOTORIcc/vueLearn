<template>
  <div>
    <LayoutFixed></LayoutFixed>
    <LayoutNav></LayoutNav>
    <LayoutHeader></LayoutHeader>
    <router-view></router-view>
    <LayoutFooter></LayoutFooter>
  </div>

</template>

<script>
import LayoutNav from "@/views/Layout/components/LayoutNav.vue";
import LayoutFooter from "@/views/Layout/components/LayoutFooter.vue";
import LayoutHeader from "@/views/Layout/components/LayoutHeader.vue";
import LayoutFixed from "@/views/Layout/components/LayoutFixed.vue";
// import Home from '@/views/Home/index.vue'

import {useCategoryStore} from "@/stores/category";
export default {
  name: "index",
  components: {
    LayoutNav,
    LayoutFooter,
    LayoutHeader,
    LayoutFixed,
    // Home
  },
  setup(){
    useCategoryStore().getCategory()
  }
}
</script>

<style scoped>

</style>
