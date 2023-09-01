<template>
  <div>
    <h2 ref="title">hhhh</h2>

  </div>
</template>

<script>
import { ref, watchEffect } from "vue";

export default {
  name: "App",
  setup(){
    //定义一个空ref对象
    const title = ref(null)

    console.log(title.value);//因为title需要等dom渲染完之后才能把值返回给title对象 且setup的回调时间是很早的 所以直接打印title是没有值的
    //所以借用监听方式 等title被赋值后 就会打印出title的value
    watchEffect(() => {
      console.log(title.value);
    }, {
      flush: 'post'//默认情况下watchEffect的监听是很积极的 回调时间很早 设置为post后会等dom挂载完毕之后再回调监听 避免一开始打印的null
    })
    return{
      //将空ref对象传递出去 标签引用这个空ref标签后 会自动赋值 即可获取标签内的数据 实现ref功能
      title
    }
  }
}
</script>

<style scoped>

</style>
