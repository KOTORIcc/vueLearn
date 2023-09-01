<template>
  <div>
    <h1>this is root component</h1>
    <button @click="toHome">主页</button>
    <button @click="toAbout">关于</button>
    <button @click="toUser">用户</button>
    <!--通过按钮实现query参数传递-->
    <button @click="toProfile">Profile</button>
    <button @click="btnclick">click</button>
    <br>
    <router-link to="/Home">主页 </router-link>
    <router-link to="/About">关于 </router-link>
    <!--router传递参数-->
    <!--动态绑定url-->
    <router-link :to="'/User/'+userID">用户 </router-link>
    <!--query方式-->
    <router-link :to="{path:'/Profile',query: {name:username, id:profileid}}">Profile </router-link>
    <h2>一级子组件展示</h2>
    <h2>-----------------------</h2>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <h2>-----------------------</h2>
  </div>
</template>

<script>

import { onBeforeRouteLeave } from "vue-router";

export default {
  //这其实还是vue2的Options API vue3已经使用了更先进的Composition API
  name: 'App',
  data(){
    return{
      username:'aaaaa',
      profileid:'bbbb',
      userID:'zhangsan'
    }
  },
  //有很多生命周期函数，是已经定义好，等待调用的
  beforeCreate(){
  },
  created(){
    console.log('Home created');
  },
  beforeMount(){
    console.log('Home Mounted');
  },
  mounted(){
    console.log('Home Mounted');
  },
  unmounted() {
    console.log('Home unmounted');
  },

  //当数据发生改变
  beforeUpdate(){
  },
  updated(){
  },
  onBeforeRouteLeave:(to, from, next)=>{

    console.log(this.$route.path);
    next()
  },
  activated(){
    console.log('Home activated');
  },
  deactivated(){
    console.log('Home deactivated');
  },
  beforeDestroy(){
  },
  destroyed() {
    console.log('Home Destoryed');
  },

  //自定义函数
  methods:{
    //通过代码方式实现路由跳转
    toHome(){
      // console.log('Home');
      this.$router.push('/Home')
    },
    toAbout(){
      this.$router.push('/About')
    },
    toUser(){
      // url动态绑定 /User/zhangsan
      this.$router.push('/User/'+this.userID)
    },
    toProfile(){
      this.$router.push({path:'/Profile',query:{name:this.username, id:this.profileid}})
    },
    btnclick(){
      //route就是路由表中当前激活的路由项
      console.log(this.$route);
    }
  }
}
</script>

<style>

</style>
