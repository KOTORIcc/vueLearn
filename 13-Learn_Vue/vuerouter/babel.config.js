module.exports = {
  presets: [
      //vue 为babel提供了预设，在此直接调用即可，免去了繁琐的配置环节
      // 这部分是从webpack的babel-loader的配置中分离出来的，方便修改配置
    '@vue/cli-plugin-babel/preset'
  ]
}
