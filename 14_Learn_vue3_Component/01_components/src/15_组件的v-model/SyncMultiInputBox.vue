<template>
  <div>
    <input type="text" v-model="Input1">
    <input type="text" v-model="Input2">
  </div>
</template>

<script>
export default {
  name: "SyncMultiInputBox",
  props:{
    //组件有两个input框需要双向绑定之后，v-model不能再使用默认的modelValue这个值了，必须手动赋值
    inputA:{
      type:String,
    },
    inputB:{
      type:String
    }
  },
  emits:['update:inputA','update:inputB'],
  computed:{
    Input1:{
      set(value){
        this.$emit('update:inputA',value)
      },
      get(){
        return this.inputA
      }
    },
    Input2:{
      set(value){
        this.$emit('update:inputB',value)
      },
      get(){
        return this.inputB
      }
    }
  }
}
</script>

<style scoped>

</style>
