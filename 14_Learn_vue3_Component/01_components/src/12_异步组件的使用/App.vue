<template>
  <div>
    <Home>
    </Home>
    <AsyncCategory>
    </AsyncCategory>

    <!--suspense组件 有两个插槽-->
    <suspense>
      <!--默认展示-->
      <template #default>
        <AsyncCategory></AsyncCategory>
      </template>
      <!--如果default的组件无法展示，就展示fallback的组件-->
      <template #fallback>
        <Home></Home>
      </template>
    </suspense>
  </div>
</template>

<script>
import Home from "@/12_异步组件的使用/Home.vue";
import Loading from "@/12_异步组件的使用/Loading.vue";
// import AsyncCategory from "@/12_异步组件的使用/AsyncCategory.vue";
//引入vue的异步组件模块
import {defineAsyncComponent} from "vue";
//异步组件函数要求，一个compromise对象，或者一个对象用来配置AsyncComponent
//import函数返回的就是一个compromise对象，所以利用一个空参箭头函数，返回一个compromise对象

//第一种写法
// const AsyncCategory = defineAsyncComponent(()=>import('./AsyncCategory.vue'))

//第二种写法
const AsyncCategory = defineAsyncComponent({
  loader: () => import('./AsyncCategory.vue'),
  //组件比较大，下载比较花时间，我希望vue能在组件为加载完成的时候，展示一个‘加载中’的小组件
  loadingComponent:Loading,
  // errorComponent: 字面意思
  delay:2000,//loading组件延迟显示2000ms 在显示loading组件之前等待多久
  // err 错误信息
  // retry 函数。调用尝试重新加载
  // attempts 尝试次数
  onError(err, retry, attempts) {

  }
})
export default {
  name: "App",
  components:{
    Home,
    AsyncCategory,
    Loading
  }

}
</script>

<style scoped>

</style>
