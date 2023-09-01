<template>
  <div class="main">
    <div>
      <button @click="isshow = !isshow">IsShow</button>
    </div>
    <!--希望组件第一次加载展示的时候就有出场动画 appear改为true即可  直接只写一个appear也可以-->
<!--    <transition name="animation" mode="out-in" :appear="true">-->
    <transition name="animation" mode="out-in" appear>
      <Component :is="isshow ? 'Home' : 'About' "></Component>
    </transition>

  </div>
</template>

<script>
import Home from "@/01_动画的基本使用/pages/Home.vue";
import About from "@/01_动画的基本使用/pages/About.vue";

export default {
  name: "App",
  data(){
    return{
      isshow:true
    }
  },
  components:{
    Home,
    About
  }
}
</script>

<style scoped>
.main{
  position: absolute;
  margin: auto;
  top: 50%;
  left: 50%;
  /*right: 50%;*/
  /*bottom: 50%;*/
}
  .animation-enter-active{
    animation: bounce 1s ease;
  }
  .animation-leave-active{
    animation: bounce 1s ease reverse;
  }

  @keyframes bounce {
    0%{
      transform: scale(0) ;
      opacity: 0;
    }
    50%{
      transform: scale(1.5);
      opacity: 0.5;
    }
    100%{
      transform: scale(1);
      opacity: 1;
    }
  }
  .title{
    display: inline-block;
  }


</style>
