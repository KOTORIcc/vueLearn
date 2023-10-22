<template>
  <nav class="app-topnav">
    <div class="container">
      <ul>
        <template v-if="JSON.stringify(UserStore.userInfo ) !== '{}' || UserStore.userInfo.result">
          <li><a href="javascript:;"><i class="iconfont icon-user"></i>{{UserStore.userInfo.result.nickname}}</a></li>
          <li>
            <el-popconfirm
              @confirm="confirmLogOut"
              title="确认退出吗?"
              confirm-button-text="确认"
              cancel-button-text="取消">
              <template #reference>
                <a href="javascript:;">退出登录</a>
              </template>
            </el-popconfirm>
          </li>
          <li><a href="javascript:;">我的订单</a></li>
          <li><a href="javascript:;">会员中心</a></li>
        </template>
        <template v-else>
          <li><a href="javascript:;" @click="$router.push('/Login')">请先登录</a></li>
          <li><a href="javascript:;">帮助中心</a></li>
          <li><a href="javascript:;">关于我们</a></li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<script>
import { useUserStore } from '@/stores/user'
import {useRouter} from 'vue-router'
import {useCartStore} from "@/stores/cartStore";
export default {
  name: "LayoutNav",
  setup() {

    const router = useRouter()
    const UserStore = useUserStore()
    const confirmLogOut = () => {
      router.replace({path:'/login'})
        .then(() => {
          const UserStore = useUserStore()
          const cartStore = useCartStore()
          UserStore.clearUserInfo()
          cartStore.clearCart()

        }
      )
    }
    return{
      UserStore,
      confirmLogOut
    }
  }
}
</script>

<style scoped lang="scss">
.app-topnav {
  background: #333;
  ul {
    display: flex;
    height: 53px;
    justify-content: flex-end;
    align-items: center;
    li {
      a {
        padding: 0 15px;
        color: #cdcdcd;
        line-height: 1;
        display: inline-block;

        i {
          font-size: 14px;
          margin-right: 2px;
        }

        &:hover {
          color: $xtxColor;
        }
      }

      ~li {
        a {
          border-left: 2px solid #666;
        }
      }
    }
  }
}
</style>
