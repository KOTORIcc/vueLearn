import dayjs from 'dayjs'
export default (app) => {
  app.directive('format-time', {
    mounted(el, bindings){
      let formatString = 'YYYY-MM-DD HH:mm:ss'
      if (bindings.value) {
        formatString = bindings.value
      }

      const textContent = el.textContent;
      //textContent中的数据往往是string类型的 需要转换为数字
      let timestamp = parseInt(textContent)
      if (textContent.length === 10){
        //时间戳s为单位 是10位 ms为单位就得 *1000
        timestamp = timestamp * 1000
      }
      el.textContent = dayjs(timestamp).format(formatString)
      console.log(textContent);
    }
  })
}
