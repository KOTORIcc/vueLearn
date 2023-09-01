<template>
  <div>
<!--   vue-router4新增的router-link的插槽写法-->
    <router-link to="/Home" active-class="my-active" v-slot="props" custom> <!--写了custom之后 插槽内的元素不会自动处理为可跳转元素 需要自行设计-->
      <!--props: navigate 导航函数
          props: href 跳转链接
          props: isActive 是否处于活跃状态
          props: isExactActive 是否精确的处于活跃状态-->
      <button @click="props.navigate">toHome</button> <!--手动调用props中的navigate函数即可实现自定义导航元素 -->
      <h2>href:{{props.href}}</h2>
      <h2>isActive:{{props.isActive}}</h2>
      <h2>isExactActive:{{props.isExactActive}}</h2>
    </router-link>
    <router-link to="/About">toAbout</router-link>
    <router-link to="/User/zhangsan/id/00001">toUser</router-link>
    <router-link to="/category">ToCategory</router-link>

    <button @click="ToAbout">关于</button>
    <h2>App Page</h2>

<!--
    <transition>
      需要传递进来一个组件实例 但是 router-view只是一个占位符 并不是组件实例
      <component :is="组件"></component>
    </transition>
-->
    <router-view v-slot="props"> <!--通过插槽的方式 可以使用props获取当前的Component实例-->
      <transition name="why">
        <component :is="props.Component"></component>
      </transition>
    </router-view>
  </div>

</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "App",
  setup(){
    const router = useRouter()
    const ToAbout = () => {
      router.push({
        path:'/About',
        query: {
          name: 'aaa',
          age: 18
        }
      })
    }

    return{
      ToAbout
    }
  }
}
</script>

<style scoped>
  .my-active{
    color:red;
  }
  .why-enter-to,
  .why-leave-from{
    opacity: 1;
  }
  .why-enter-from,
  .why-leave-to{
    opacity: 0;
  }
  .why-enter-active,
  .why-leave-active{
    transition: all 1s ease
  }

</style>
