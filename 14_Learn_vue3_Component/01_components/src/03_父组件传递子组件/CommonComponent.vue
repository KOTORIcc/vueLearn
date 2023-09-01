<template>
  <!--这里的class当然是规定的属性名字了-->
  <div :class="$attrs.CommonComponentClass2"><!--从父组件中手动获取了class属性-->
    <h5>{{a}}</h5>
    <h6>{{b}}</h6>
  </div>
</template>

<script>
export default {
  //通过props属性 在调用该模块的时候从父组件接受数据
  //props全名为properties意为属性s
  name: "CommonComponent",
  // props:['a','b']
  //实际使用中更常见的用法，方便对传入的数据作一些限制
  props:{
    a: String,//限制类型为String
    b: {
      type:String,//限制类型为String
      required: true,//限制必须给出
      default: 'asdad'//设置默认值
    }
  }
}
</script>

<style scoped>

</style>
