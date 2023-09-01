<template>
  <div>

    <ChildCpn>
      <h2>123456</h2>
      <!--编译作用域的概念-->
      <!--虽然是传递给子组件来处理，但是mustache语法数据来源必须来自父组件，因为是在父组件中定义的，同样的，子组件的数据来源也不能跨组件-->
      <h2>{{title}}</h2><!--编译作用域的限制，定义插槽中元素时必须赋值-->
    </ChildCpn>

    <!--通过props把names数组传递给子组件ChildCpn-->
    <ShowNames :names="names">
      <!--我希望子组件在遍历names，创建slot插槽时，父组件也能拿到names数组中的数据，方便通过按钮等元素展示-->
      <!--因为编译作用域的限制，插槽中元素必须由定义该插槽的组件确定，所以通过子组件的插槽获取数据，是必要的方式-->
      <!--<button>item</button>-->
      <template v-slot="slotProps">
        <button>{{slotProps.item}}</button>
      </template>
    </ShowNames>

    <ShowNames :names="names">
      <!--对于没有name的插槽，其实默认是有一个default的名字的，在v-slot中被省略了-->
      <template v-slot:default="slotProps"><!--子组件已经设置了作用域插槽，调用的时候只需要起一个名字，用来接受数据即可-->
        <strong>{{slotProps.item}}</strong>
      </template>
    </ShowNames>

    <!--缩写格式，只适用于default插槽，不适用于具名插槽  可以省略template-->
    <!--独占默认插槽缩写 格式 只有一个唯一的匿名插槽独占子组件 才可以使用缩写-->
    <ShowNames :names="names" v-slot:default="slotProps">
        <strong>{{slotProps.item}}</strong>
    </ShowNames>

    <!--使用作用域插槽和具名插槽-->
    <ShowNamesPlus :names="names"><!--:names是子组件的props属性-->
      <template v-slot:ShowNamesPlus="slotProps"><!--ShowNamesPlus是绑定的插槽名  ="slotProps"是作用域插槽名-->
        <h1>{{slotProps.item}}</h1>
      </template>
    </ShowNamesPlus>





  </div>
</template>

<script>
import ChildCpn from "@/10_作用域插槽使用/ChildCpn.vue";
import ShowNames from "@/10_作用域插槽使用/ShowNames.vue";
import ShowNamesPlus from "@/10_作用域插槽使用/ShowNamesPlus.vue";
export default {
  name: "App",
  components:{
    ChildCpn,
    ShowNames,
    ShowNamesPlus
  },
  data(){
    return{
      title:'App element',
      //现在需要一个子组件，可以传递进去一个数组，并且展示出来，来演示作用域插槽
      names:[1,2,3,4,5,6]
    }
  }
}
</script>

<style scoped>

</style>
