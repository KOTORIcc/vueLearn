
<template>
  <div>
    <h2>{{firstName}}--{{lastName}}</h2>
    <h2>{{fullName}}</h2>
    <button @click="changeName">Change</button>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  name: "App",
  setup(){
    const firstName = ref('Kobe')
    const lastName = ref('Bryant')

    // const fullName = firstName.value + lastName.value //这样写就失去的响应式

    //用法一 传入一个getter函数
    //computed返回的是一个ref对象  所以当ref对象内的数值发生变化时 get函数会被回调 依然拥有响应式
    // const fullName = computed(() => firstName.value + lastName.value )

    //用法二 传入一个有get函数和set函数的对象
    const fullName = computed({
      set(newValue){
        const name = newValue.split('  ')
        firstName.value = name[0]
        lastName.value = name[1]
      },
      get(){
        return firstName.value + '  ' + lastName.value
      }
    })

    function changeName(){
      // firstName.value = '原神!'
      // lastName.value = '启动!'
      fullName.value = '原神!  启动!!'
    }
    return{
      firstName,
      lastName,
      fullName,
      changeName
    }
  }
}
</script>

<style scoped>

</style>

