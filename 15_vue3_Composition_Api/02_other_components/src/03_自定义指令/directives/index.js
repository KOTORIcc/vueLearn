import registerFormatTime from './format-time'
export default function registerDirectives(app){//这里的app是一个形参啊 只要main调用了这个接口函数 里面的所有函数都会被调用 并且把app传递进去
  registerFormatTime(app);
}
