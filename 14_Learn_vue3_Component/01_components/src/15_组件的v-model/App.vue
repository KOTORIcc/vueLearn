<template>
  <div>
    <!--在元素上使用v-model-->
    <input type="text" v-model="message">
    <!--等同于     value属性名是规定的，不可随意更改-->
    <input type="text" :value="message" @input="message = $event.target.value">


    <!--组件上使用v-model-->
    <!--  message ->  props  ->  @update   ->  message  以此实现父子组件双向绑定-->
    <MyInput v-model="message" btnName="自动v-model"></MyInput>
    <!--等同于   modelValue update:modelValue 都是定好的，不要随便修改
    同时子组件的props中应当增加modelValue属性  增加update:modelValue的事件触发-->

    <!--  message ->  props  ->  @update   ->  message  ->  handler  ->  log -->
    <MyInput :modelValue="message" @update:modelValue="handler" btnName="手动v-model"></MyInput>
    <!--没有后面的@update:modelValue="handler"一样能实现双向绑定，触发事件只是为了做一些别的处理-->
    <!--默认是把监听到的数据传递给双向绑定的数据，  手动实现后可以作出修改，自定义数据的处理方式-->



    <!--通过v-model实现子组件内的input数据与父组件双向绑定-->
    <h1>------------------------------------------------------------------</h1>
    <h3>MySyncInputBox</h3>
    <MySyncInputBox :modelValue="message" @update:modelValue="SyncInputBox"></MySyncInputBox>
    <h2>
      {{message}}
    </h2>


    <!--一次性绑定多个input框   v-model默认写法其实隐藏了默认的modelValue这个props， 当然可以自定义这个参数的名字-->
    <SyncMultiInputBox v-model:inputA="messageA" v-model:inputB="messageB"></SyncMultiInputBox>
    <h2>inputA:{{messageA}}</h2>
    <h2>inputB:{{messageB}}</h2>
  </div>
</template>

<script>
import MyInput from "@/15_组件的v-model/MyInput.vue";
import MySyncInputBox from "@/15_组件的v-model/MySyncInputBox.vue";
import SyncMultiInputBox from "@/15_组件的v-model/SyncMultiInputBox.vue";
export default {
  name: "App",
  data(){
    return{
      message:'aaa',
      messageA:'',
      messageB:''
    }
  },
  components:{
    MyInput,
    MySyncInputBox,
    SyncMultiInputBox
  },
  methods:{
    handler(event){
      console.log(event);
      this.message=event
    },
    SyncInputBox(event){
      this.message = event
    }
  }


}
</script>

<style scoped>

</style>
