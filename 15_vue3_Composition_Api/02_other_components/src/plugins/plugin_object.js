export default {
  //这个函数必须有 插件要求有一个回调函数 回调的时候会传递app进来
  //这个名字是不能随便写的 就是install
  install(app) {
    console.log(app);
    //这样就给app添加了一个全局的属性 name
    app.config.globalProperties.$name = 'why'
  }
}
