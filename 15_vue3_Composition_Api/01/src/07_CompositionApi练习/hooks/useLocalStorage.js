import {ref, watch} from 'vue'
export default (key, value) => {
  const data = ref(value)

  if (value){
    //如果value有值 那么使用stringfy将其转换成string 保存在localStorage中
    window.localStorage.setItem(key, JSON.stringify(value))
  }else {//如果没有值 那么就是从 LocalStorage中 取出数据
    data.value = JSON.parse(window.localStorage.getItem(key)) //通过JSON.parse 对string数据进行解析
  }

  //监听data ref对象 当ref对象发生变化 自动存储
  watch(data, (newValue) => {
    window.localStorage.setItem(key, JSON.stringify(newValue))
  })

  return data
}

//如果使用的时候传进来一个参数 应当是取值
//如果传进来两个参数 应当是取值
