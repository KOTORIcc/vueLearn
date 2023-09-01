<template>
  <div>
    <div>
      <button @click="isshow = !isshow"> IsShow</button>
    </div>


    <transition name="h2animation">
      <!--h2标签的缩放动画很诡异，因为h2是一个块级标签，占据一整行，所以缩放的时候不是以文字为中心，而是以整块h2标签为元素进行缩放-->
      <!--所以需要class设定一下样式-->
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

</style>
