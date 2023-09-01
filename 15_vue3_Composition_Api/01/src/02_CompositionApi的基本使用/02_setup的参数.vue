<template>
  <div>
    Home Page
    <h2>{{message}}</h2>
  </div>
</template>

<script>
export default {
  name: "Home",
  props:{
    message:{
      type: String,
      require: true
    }
  },
  //setup主要有两个参数 props 和 context
  //context 包含三个属性 attrs slots emit
  // setup(props, context){
  //   //setup中是没有this指定的，所以this的方式是拿不到数据的
  //   // console.log(this.props);
  //
  //   //必须通过函数参数传递进来的方式才能获取到
  //   console.log(props.message);
  //   console.log(context.attrs.attrA);
  //   console.log(context.slots);
  //   console.log(context.emit);
  // },
  // 可以直接把context 结构成 三个元素
  //当然 不传参数也是可以的
  setup(props, {attrs, slots, emit}){//这些只是形参 名字随便起 只是顺序有要求
      console.log(props.message);
      console.log(attrs.attrA);
      console.log(slots);
      console.log(emit);

  }
}
</script>

<style scoped>

</style>
