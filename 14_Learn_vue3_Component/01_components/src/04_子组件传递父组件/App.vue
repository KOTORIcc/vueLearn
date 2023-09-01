<template>
  <div>
    <h2>当前计数：{{counter}}</h2>
    <CounterOperation @add="add" @sub="sub" @addN="addN"></CounterOperation><!--在此监听自己定义的两个信号，并设置处理函数对信号做出响应-->
    <!--如果捕获的信号包含多个属性，会全部交给处理函数-->
  </div>
</template>

<script>
import CounterOperation from "@/04_子组件传递父组件/CounterOperation.vue";
export default {
  name: "App",
  data(){
    return{
      counter: 0
    }
  },
  methods:{
    add(){
      this.counter = this.counter + 1
    },
    sub(){
      this.counter = this.counter - 1
    },
    addN(num){
      this.counter = this.counter + num
    }
  },
  components:{
    CounterOperation,
  }
}
</script>

<style scoped>

</style>
