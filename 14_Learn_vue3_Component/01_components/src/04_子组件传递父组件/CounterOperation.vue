<template>
  <div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <input type="text" v-model.number="num">
    <button @click="incrementN">+N</button>
  </div>
</template>

<script>
export default {
  name: "CounterOperation",
  //一般来说这样写就足够开发使用了，但是如果有特殊要求可以写成对象形式
  // emits:['add','sub','addN'],//自定义事件

  //这样就可以对信号中传递的参数做出一些判断。如果符合要求，return true即放行
  //如果不满足会报警告，但是依然会工作
  //对传递的数据作一些处理的方式罢了
  emits:{
    add:null,
    sub:null,
    addN: (num)=>{
      if(num <=10){
        return true
      }
    }
  },
  methods:{
    decrement(){
      console.log('-1');
      this.$emit('sub')//触发事件
    },
    increment(){
      console.log('+1');
      this.$emit('add')
    },
    incrementN(){
      //第一个参数是设定发出的自定义信号名，后面可以跟许多参数，会随着信号一同发出
      this.$emit('addN',this.num)
    }
  },
  data(){
     return{
       num: 0
     }
  }
}
</script>

<style scoped>

</style>
