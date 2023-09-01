<template>
  <div class="main">
    <div>
      <button @click="isshow = !isshow">IsShow</button>
    </div>
    <!--所以可以设置mode为in-out 先进后出 或者out-in-->
    <transition name="animation" mode="out-in">
      <!--默认情况下 组件的切换动画是同时进行的，所以看起来会很怪异-->
      <h2 class="title" v-if="isshow">hello world</h2>
      <h2 class="title" v-else>原神，启动！</h2>
    </transition>




  </div>
</template>

<script>

export default {
  name: "App",
  data(){
    return{
      isshow:true
    }
  },

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
