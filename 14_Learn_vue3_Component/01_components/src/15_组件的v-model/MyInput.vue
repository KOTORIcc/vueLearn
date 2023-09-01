<template>
  <div>
    <button @click="btnClick">{{ btnName }}</button>
    <h2>MyInput--{{modelValue}}</h2>
  </div>
</template>

<script>
export default {
  name: "MyInput",
  props:{
    //一定需要这个modelValue的props属性来接收数据
    modelValue:{
      type:String,
    },
    btnName:{
      type:String,
    }
  },
  emits:['update:modelValue'],
  methods:{
    btnClick(){
      //这里传递回去的参数，就是$event,在methods内的func中使用直接写event就行
      this.$emit('update:modelValue',this.modelValue)
      //一定需要一个发送事件来触发update:modelValue事件，
    },

  }
}
</script>

<style scoped>

</style>
