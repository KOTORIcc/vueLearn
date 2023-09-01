class Dep {
  constructor() {
    this.subscribers = new Set() //用set是因为 集合不允许出现元素重复 避免一个回调函数注册多次
  }

  depend() {
    if (activeEffect) {
      this.subscribers.add(activeEffect)
    }
  }

  notify() {
    this.subscribers.forEach((effect) => {
      effect()
    })
  }
}

let activeEffect = null;
const watchEffect = (effect) => {
  activeEffect = effect;
  effect()
  activeEffect = null;
}

//Map: (key: value) key是一个字符串
// WeakMap ({key(一个对象): value}) key是一个弱引用对象

const targetMap = new WeakMap();
const getDep = (target, key) => { //传递进去reactive对象和key值
  //              targetMap
  //                  |
  //  reactive对象----------depsMap 映射关系
  //                          |
  //        reactive对象的key------dep映射关系
  //1、根据对象(target)取出对于的depsMap对象
  let depsMap = targetMap.get(target);//尝试获取
  if (!depsMap) {//没有就新建一个
    depsMap = new Map()
    targetMap.set(target, depsMap)
  }

  //2、取出具体的dep对象
  let dep = depsMap.get(key);//尝试获取
  if( !dep ){//没有就新建一个
    dep = new Dep();
    depsMap.set(key, dep)
  }
  return dep
}

const reactive = (raw) => {
  //对raw源数据作数据劫持
  //vue2方式
  //对raw中所有的 key作了劫持
  Object.keys(raw).forEach((key) => {

    const dep = getDep(raw, key)
    let value = raw[key]
    //获取raw中的所有键值后 对所有键值都设置一个getter 和 setter函数
    Object.defineProperty(raw, key, {
      get(){
        dep.depend()
        return value
        // 不能直接这样返回 直接raw[key]会导致递归调用 无限循环
        // return raw[key]
      },
      set(newValue){
        if (value !== newValue) {
          value = newValue
          dep.notify()
        }
      }
    })
  })
  return raw //这里返回的仍然是 源数据 与vue3返回一层proxy对象代理有区别 defineProperty 方式实现响应式 修改源数据也能实现监听
}
//这样在获取数据 或者 修改数据的时候 就会经过这一层数据劫持 进入getter和setter函数
// const name = raw.name;
// raw.name = '12'

//在创建reactive对象时 就已经通过遍历 把对象中的所有键值对 通过getDep方法获取了对应的dep对象 并且添加了getter和setter函数
const info = reactive({counter: 1, name:'genShit'});
const foo = reactive({height: 120});

//直接把回调函数传递给 监听函数
//当调用watchEffect时 传递进去的回调函数会被调用一次 触发回调函数相关数据的getter方法 getter方法中的depend 就会把这个方法 注册进该getter方法对应的数据的dep中
watchEffect(() => console.log(info.counter * 2, info.name));
watchEffect(() => console.log(info.counter * info.counter));
watchEffect(() => console.log(info.counter + 10, info.name));

watchEffect(() => console.log(foo.height));

info.counter++;
// dep.notify()

info.name = 'start!'
//只修改了name属性 其他与name无关的回调函数不应当执行 不能直接简单的使用notify 回调全部注册的回调函数
// dep.notify()

