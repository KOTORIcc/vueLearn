<template>
  <div>
    <header class="login-header">
      <div class="container m-top-20">
        <h1 class="logo">
          <RouterLink to="/">小兔鲜</RouterLink>
        </h1>
        <RouterLink class="entry" to="/">
          进入网站首页
          <i class="iconfont icon-angle-right"></i>
          <i class="iconfont icon-angle-right"></i>
        </RouterLink>
      </div>
    </header>
    <section class="login-section">
      <div class="wrapper">
        <nav>
          <a href="javascript:;">账户登录</a>
        </nav>
        <div class="account-box">
          <div class="form">
            <!--通过查询elementPlus手册 获取表单的使用方法 传递进去一个model和rules props 告诉表单有哪些数据 以及数据的限制-->
            <el-form :model="form"
                     :rules="rules"
                     label-position="right"
                     label-width="60px"
                     status-icon ref="FormRef">
              <!-- 从父组件中传递进去的form中 为子输入框绑定一个 属性 -->
              <el-form-item  prop="account" label="账户">
                <!--双向绑定表单数据-->
                <el-input v-model="form.account"/>
              </el-form-item>
              <el-form-item prop="password" label="密码">
                <el-input v-model="form.password"/>
              </el-form-item>
              <el-form-item prop="agree" label-width="22px">
                <el-checkbox  size="large" v-model="form.agree">
                  我已同意隐私条款和服务条款
                </el-checkbox>
              </el-form-item>
              <el-button size="large" class="subBtn" @click="Login">点击登录</el-button>
            </el-form>
          </div>
        </div>
      </div>
    </section>

    <footer class="login-footer">
      <div class="container">
        <p>
          <a href="javascript:;">关于我们</a>
          <a href="javascript:;">帮助中心</a>
          <a href="javascript:;">售后服务</a>
          <a href="javascript:;">配送与验收</a>
          <a href="javascript:;">商务合作</a>
          <a href="javascript:;">搜索推荐</a>
          <a href="javascript:;">友情链接</a>
        </p>
        <p>CopyRight &copy; 小兔鲜儿</p>
      </div>
    </footer>
  </div>
</template>

<script>
import {ref} from "vue";
import {useRouter} from "vue-router";
import { ElMessage } from "element-plus";
import 'element-plus/es/components/message/style/css'
import {useUserStore} from "@/stores/user";
import {useCartStore} from "@/stores/cartStore";
export default {
  name: "index",
  setup(){
    const form = ref({
      account: '',
      password: '',
      agree: true
    })
    const rules = {
      account:[
        {
          validator:(rule, val, cb) => {
            if (val === '') {
              cb(new Error('用户名不能为空'))
            } else {
              cb()
            }
          } ,trigger: 'blur'},//失去焦点时触发
      ],
      password:[
        {
          validator:(rule, val, cb) => {
            if (val === '') {
              cb(new Error('密码不能为空'))
            } else {
              cb()
            }
          }, trigger: 'blur'},
        {
          validator:(rule, val, cb) => {
            if (5 < val.length && val.length < 14) {
              cb()
            } else {
              cb(new Error('密码需要6-14位'))
            }
          }, trigger: 'blur'}
      ],
      agree:[
        {
          validator:(rule, val, cb) => {
            if (val) {
              cb()
            } else {
              cb(new Error('请勾选协议'))
            }
          }
        }
      ]
    }
    const FormRef = ref(null)

    const cartList = useCartStore().cartList
    const router = useRouter()
    const userStore = useUserStore()
    const Login = () => {
      // 通过ref获取表单元素 在点击登录按钮时调用 该元素下的validate方法 验证所有注册过的rules
      FormRef.value.validate(async (valid) => {
      //   所有表单通过校验才能通过 如果validate没有通过 valid会返回一个false
        if (valid) {
          const { account, password } = form.value
          //这里的异步同步问题很操蛋 我的解决办法是 在创建pinia仓库时直接返回一个值 使用await阻塞 直到从服务器取回数值再作是否跳转的判定
          const userInfo = await userStore.getUserInfo({account, password})
          if (userInfo.result.token){
            await useCartStore().getCart()
            await useCartStore().mergeCart()
            console.log(cartList);
            ElMessage({
              type: 'success',
              message: '登录成功'
            })
            await router.replace({path: '/'})
          } else {
            ElMessage({
              type: 'warning',
              message: '登录失败'
            })
          }


        }
      })
    }

    return{
      form, rules,
      FormRef, Login
    }
  }
}
</script>

<style scoped lang="scss">
.login-header {
  background: #fff;
  border-bottom: 1px solid #e4e4e4;

  .container {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  .logo {
    width: 200px;

    a {
      display: block;
      height: 132px;
      width: 100%;
      text-indent: -9999px;
      background: url("@/assets/images/logo.png") no-repeat center 18px / contain;
    }
  }

  .sub {
    flex: 1;
    font-size: 24px;
    font-weight: normal;
    margin-bottom: 38px;
    margin-left: 20px;
    color: #666;
  }

  .entry {
    width: 120px;
    margin-bottom: 38px;
    font-size: 16px;

    i {
      font-size: 14px;
      color: $xtxColor;
      letter-spacing: -5px;
    }
  }
}

.login-section {
  background: url('@/assets/images/login-bg.png') no-repeat center / cover;
  height: 488px;
  position: relative;

  .wrapper {
    width: 380px;
    background: #fff;
    position: absolute;
    left: 50%;
    top: 54px;
    transform: translate3d(100px, 0, 0);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);

    nav {
      font-size: 14px;
      height: 55px;
      margin-bottom: 20px;
      border-bottom: 1px solid #f5f5f5;
      display: flex;
      padding: 0 40px;
      text-align: right;
      align-items: center;

      a {
        flex: 1;
        line-height: 1;
        display: inline-block;
        font-size: 18px;
        position: relative;
        text-align: center;
      }
    }
  }
}

.login-footer {
  padding: 30px 0 50px;
  background: #fff;

  p {
    text-align: center;
    color: #999;
    padding-top: 20px;

    a {
      line-height: 1;
      padding: 0 10px;
      color: #999;
      display: inline-block;

      ~a {
        border-left: 1px solid #ccc;
      }
    }
  }
}

.account-box {
  .toggle {
    padding: 15px 40px;
    text-align: right;

    a {
      color: $xtxColor;

      i {
        font-size: 14px;
      }
    }
  }

  .form {
    padding: 0 20px 20px 20px;

    &-item {
      margin-bottom: 28px;

      .input {
        position: relative;
        height: 36px;

        >i {
          width: 34px;
          height: 34px;
          background: #cfcdcd;
          color: #fff;
          position: absolute;
          left: 1px;
          top: 1px;
          text-align: center;
          line-height: 34px;
          font-size: 18px;
        }

        input {
          padding-left: 44px;
          border: 1px solid #cfcdcd;
          height: 36px;
          line-height: 36px;
          width: 100%;

          &.error {
            border-color: $priceColor;
          }

          &.active,
          &:focus {
            border-color: $xtxColor;
          }
        }

        .code {
          position: absolute;
          right: 1px;
          top: 1px;
          text-align: center;
          line-height: 34px;
          font-size: 14px;
          background: #f5f5f5;
          color: #666;
          width: 90px;
          height: 34px;
          cursor: pointer;
        }
      }

      >.error {
        position: absolute;
        font-size: 12px;
        line-height: 28px;
        color: $priceColor;

        i {
          font-size: 14px;
          margin-right: 2px;
        }
      }
    }

    .agree {
      a {
        color: #069;
      }
    }

    .btn {
      display: block;
      width: 100%;
      height: 40px;
      color: #fff;
      text-align: center;
      line-height: 40px;
      background: $xtxColor;

      &.disabled {
        background: #cfcdcd;
      }
    }
  }

  .action {
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .url {
      a {
        color: #999;
        margin-left: 10px;
      }
    }
  }
}

.subBtn {
  background: $xtxColor;
  width: 100%;
  color: #fff;
}
</style>
