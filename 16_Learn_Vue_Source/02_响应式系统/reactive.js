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

const targetMap = new WeakMap();
const getDep = (target, key) => {

  //1、根据对象(target)取出对于的depsMap对象
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    depsMap = new Map()
    targetMap.set(target, depsMap)
  }

  //2、取出具体的dep对象
  let dep = depsMap.get(key);
  if( !dep ){
    dep = new Dep();
    depsMap.set(key, dep)
  }
  return dep
}

const reactive = (raw) => {
  //与vue2不同之处 返回的是一层proxy代理实例 并不再是源数据 只有通过proxy实例才能触发数据劫持
  return new Proxy(raw, {//raw源数据 传递进proxy 在调用getter setter的时候 同样也会传递进去 target和raw是同一个东西
    get(target, key) {
      const dep = getDep(target, key)
      dep.depend()
      //这里就可以通过直接访问源数据 来返回数据 而不用担心循环调用的问题 因为此时源数据不再具有劫持能力 vue2的劫持能力是绑定再源数据上的，所以2不能这样写
      return target[key]
    },
    set(target, key, newValue){
      const dep = getDep(target, key)
      target[key] = newValue
      dep.notify()
    },
    // has(){//in操作符的捕获器
    //
    // }
  });
}

// const proxy = reactive({name: 'asda'})
// proxy.name = '123'
//
// const info = reactive({counter: 1, name:'genShit'});
// const foo = reactive({height: 120});
//
// watchEffect(() => console.log(info.counter * 2, info.name));
// watchEffect(() => console.log(info.counter * info.counter));
// watchEffect(() => console.log(info.counter + 10, info.name));
//
// watchEffect(() => console.log(foo.height));
//
// info.counter++;
// info.name = 'start!'


