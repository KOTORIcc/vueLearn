<template>
  <div>
    <div>
      <button @click="isshow = !isshow"> IsShow</button>
    </div>
    <!--如果animation 和 transition 都用了，动画的时间不同可能导致动画异常， type选择遵循哪一种动画的时间-->
    <!--一般用不上   duration 设定动画持续时间  设定了duration后，样式里设定的时间就失效了-->
    <transition name="h2animation" type="animation" :duration="900">
      <h2 class="title" v-if="isshow">hello world</h2>
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
  }
}
</script>

<style scoped>
  .h2animation-enter-active{
    animation: bounce 1s ease;
  /*注册animation 帧动画*/
  }
  .h2animation-leave-active{
    animation: bounce 1s ease reverse;
  /*  reverse 动画流程反转*/
  }
  /*定义了一个帧动画*/
  @keyframes bounce {
    0%{
      transform: scale(0) ;
    }
    50%{
      transform: scale(1.5);
    }
    100%{
      transform: scale(1);
    }
  }
  .title{
    display: inline-block;
  }

  .h2animation-enter-from,
  .h2animation-leave-to{
    opacity: 0;
  }

  .h2animation-leave-active,
  .h2animation-enter-active {
    transition: opacity 2s ease;
    /*transition-delay: 500ms;*/
  }

</style>
