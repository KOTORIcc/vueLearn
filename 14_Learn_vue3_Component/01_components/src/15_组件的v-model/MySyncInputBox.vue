<template>
  <div>
    <!--将只读的props数据单向传递进inputbox  通过ref 在触发时获取inputbox内的实时内容-->
    <!--第一种方式 通过ref实现 input数据返回-->
    <input type="text" :value="modelValue" ref="InputBox" @input="ValueSync">

    <!--第二种方式 通过computed的set和get方法-->
    <input type="text" v-model="value">

    <input type="text" :value="modelValue" @update:value="sync">

  </div>
</template>

<script>
export default {
  name: "MySyncInputBox",
  props:{
    modelValue:{
      type:String
    }
  },
  computed:{
    value:{
      set(value){
        this.$emit('update:modelValue',value)
      },
      get(){
        return this.modelValue
      }
    }
  },
  emits:['update:modelValue'],
  methods:{
    ValueSync(event){
      //props属性是只读的，不可以通过直接修改props的方式实现双向传递
      // this.modelValue = event.target.value

      // 通过事件将inputbox内的数据返回给父组件
      this.$emit('update:modelValue',this.$refs.InputBox.value)
    }
  }
}
</script>

<style scoped>

</style>
