<template>
  <div>
    Home Page
    <h2>{{message}}</h2>
    <h3>{{counter}}</h3>
    <button @click="increment">+1</button>
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

  setup(){
    //可以定义一个局部属性
    //但是这样定义的属性是不能实现响应式的
    //在options api中定义的data(){}有响应式是因为 vue在后面会对其中的属性 调用reactive()函数 使其实现响应式
    //但是在这里 就是一个单纯的 定义了一个变量 所以只有展示的功能 不能实现响应式
    let counter = 100;

    //可以定义一个局部函数
    const increment = () => {
      counter++
      console.log(counter);
    }

      return{
        //这里的返回值可以在template中使用 相当于data的功能 基本上就不需要再定义data了
        // 如果还是定义了data 且元素的名字有冲突 以setup中的为准
        title:'Hello Home',

        counter,
        //函数得通过return返回之后才可以在template中使用
        increment

      }
  }
}
</script>

<style scoped>

</style>
