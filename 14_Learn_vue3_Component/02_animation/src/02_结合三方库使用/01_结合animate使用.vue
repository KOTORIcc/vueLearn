<template>
  <div>
    <div>
      <button @click="isShow = !isShow">IsShow</button>
    </div>

    <transition name="aaa">
      <h2 v-if="isShow" class="title">aaaa</h2>
<!--      <h2 v-if="isShow" class="title" :key="isShow" v-bind:class="{ 'animate__bounceIn': isShow }">aaaa</h2>-->
    </transition>

    <!--一般来说使用这种方式更加直观-->
    <transition enter-active-class="animate__animated animate__bounceIn" leave-active-class="animate__animated animate__bounceOut" >
      <h2 v-if="isShow" class="title">aaaa</h2>
      <!--      <h2 v-if="isShow" class="title" :key="isShow" v-bind:class="{ 'animate__bounceIn': isShow }">aaaa</h2>-->
    </transition>

  </div>
</template>

<script>
export default {
  name: "App",
  data(){
    return{
      isShow:true
    }
  },
}
</script>

<style scoped>
  .title{
    display: inline-block;
  }

  .aaa-enter-active{
    animation: bounceIn 2s ease-in;
  }
  .aaa-leave-active{
    animation: bounceOut 2s ease;
  }
</style>
