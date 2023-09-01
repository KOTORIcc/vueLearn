import {sum} from "@/12_异步组件的使用/utils/math";

console.log(sum(10, 20));

//这里并没有完整的被调用，main.js里并没有调用这个组件，仅作演示，build是无效果的
//通过这种import方式，组件会异步调用，webpack在打包时会分包，避免组件过多时，js包过大，导致首屏加载时间过长的问题
import('./utils/math').then((res)=>{
    console.log(res.sum(10, 20));
})
