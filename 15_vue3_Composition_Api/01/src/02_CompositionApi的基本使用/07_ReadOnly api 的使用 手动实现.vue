<template>
  <div>
    Home Page
    <h5>normalInfo</h5>
    <h2>{{normalInfo.name}}</h2>
    <h5>reactiveInfo</h5>
    <h2>{{reactiveInfo.name}}</h2>
    <h2>{{ReadOnlyReactiveInfo.name}}</h2>
    <h5>refInfo</h5>
    <h2>{{refInfo}}</h2>
    <button @click="updateState">updateState</button>
    <h1>我自己写的readonly 代理</h1>
    <h2>{{myReactiveInfo.name}}</h2>
  </div>
</template>

<script>
import {ref, readonly, reactive} from 'vue';
export default {
  name: "Home",
  setup(){
    //1、普通对象
    const normalInfo = {
      name:'aaa'
    };
    const readOnlyNormalInfo = readonly(normalInfo) //通过readonly创建一个proxy对象 并劫持该对象的set方法 使其无法通过set方法修改数据

    //2、响应式的对象reactive
    const reactiveInfo = reactive({
      name:'reactiveInfoName'
    })
    const ReadOnlyReactiveInfo = readonly(reactiveInfo)

    //3、响应式的对象ref
    const refInfo = ref('refInfo')
    const ReadOnlyRefInfo = readonly(refInfo)

//=====================================================================================================================
    //手动 创建Proxy代理实现 readonly
    const myReadOnlyInfo = new Proxy(normalInfo, {
      get(target, key){
        return target[key];
      },
      set(target, key, value){
        console.log('不能修改哦~');
        return true //这里返回的是 是否赋值成功的信号 不管咋样 返回true就行 说明set成功执行了他的任务
      }
    })

    //对响应式对象应用自定义readonly
    const myReactiveInfo = new Proxy(reactiveInfo, {
      set(target, key, value){
        console.log('不可以修改哦~');
        target[key] = "(●'◡'●)不可以修改哦~"
        return true
      },
      get(target, key){
        return target[key]
      }
    })

    const updateState = () => {
      // readOnlyNormalInfo.name = 'bbb' //可以通过编译 但是控制台会报警告
      // myReadOnlyInfo.name = 'ddd'
      // normalInfo.name = 'ccc' //当然 忽略proxy的代理 直接访问元数据进行修改 肯定是可以的
      // //vue的使用的proxy像是为数据提供了一个接口 有点像访问java类对象下public标记的数据 可以通过get set方法访问 也可以绕过 直接访问

      // reactiveInfo.name = 'changed!'
      // ReadOnlyReactiveInfo.name = 'no! cant changed!'

      // refInfo.value = 'changed!'
      // ReadOnlyRefInfo.value = 'no! cant changed!'

      myReactiveInfo.name = 'changed!'
    }
      return{
        title:'Hello Home',
        normalInfo,
        readOnlyNormalInfo,

        reactiveInfo,
        ReadOnlyReactiveInfo,

        refInfo,
        ReadOnlyRefInfo,

        myReadOnlyInfo,
        myReactiveInfo,

        updateState
      }
  }
}
</script>

<style scoped>

</style>
