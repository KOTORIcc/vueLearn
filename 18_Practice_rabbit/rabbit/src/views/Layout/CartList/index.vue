<template>
  <div class="xtx-cart-page">
    <div class="container m-top-20">
      <div class="cart">
        <table>
          <thead>
            <tr>
              <th width="120">
                <el-checkbox :model-value="cartStore.allSelected" @change="allCheck"/>
<!--                <el-checkbox/>-->
              </th>
              <th width="400">商品信息</th>
              <th width="220">单价</th>
              <th width="180">数量</th>
              <th width="180">小计</th>
              <th width="140">操作</th>
            </tr>
          </thead>
          <!-- 商品列表 -->
          <tbody>
            <tr v-for="i in cartList" :key="i.id">
              <td>
                <el-checkbox :model-value="i.selected" @click="(selected) => singleCheck(i, selected)"/>
              </td>
              <td>
                <div class="goods">
                  <RouterLink :to="'/detail/'+i.id"><img :src="i.picture" alt="" /></RouterLink>
                  <div>
                    <p class="name ellipsis">{{ i.name }}</p>
                  </div>
                </div>
              </td>
              <td class="tc">
                <p>&yen;{{ i.price }}</p>
              </td>
              <td class="tc">
                <el-input-number :min="1" v-model="i.count" />
              </td>
              <td class="tc">
                <p class="f16 red">&yen;{{ (i.price * i.count).toFixed(2) }}</p>
              </td>
              <td class="tc">
                <p>
                  <el-popconfirm title="确认删除吗?" confirm-button-text="确认" cancel-button-text="取消" @confirm="delCart(i.skuId)">
                    <template #reference>
                      <a href="javascript:;">删除</a>
                    </template>
                  </el-popconfirm>
                </p>
              </td>
            </tr>
            <tr v-if="cartList.length === 0">
              <td colspan="6">
                <div class="cart-none">
                  <el-empty description="购物车列表为空">
                    <el-button type="primary">随便逛逛</el-button>
                  </el-empty>
                </div>
              </td>
            </tr>
          </tbody>

        </table>
      </div>
      <!-- 操作栏 -->
      <div class="action">
        <div class="batch">
          共 {{cartStore.goodNum}} 件商品，已选择 {{haveChose}} 件，商品合计：
          <span class="red">¥ {{totalPrice}} </span>
        </div>
        <div class="total">
          <el-button size="large" type="primary" >下单结算</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {useCartStore} from "@/stores/cartStore";
import { computed } from 'vue'
export default {
  name: "index",
  setup(){
    const cartStore = useCartStore()
    const cartList = cartStore.cartList
    // console.log(cartStore.cartList);

    const delCart = (SkuId) => {
      cartStore.delCart(SkuId)
    }

    const singleCheck = (i) => {
      i.selected = !i.selected
    }
    const allCheck = (selected) => {
      cartList.forEach((item) => item.selected = selected)
    }

    const haveChose = computed(() => {
      let counter = 0
      cartList.forEach((item) => {
        if (item.selected) {
          counter = counter + item.count
        }
      })
      return counter
    })

    const totalPrice = computed(() => {
      let price = 0
      cartList.forEach((item) => {
        if (item.selected) {
          price = price + item.count * item.price
        }
      })
      return price
    })

    return {
      cartStore, cartList,
      delCart,
      singleCheck, allCheck,
      haveChose, totalPrice
    }
  }
}
</script>

<style scoped lang="scss">
.xtx-cart-page {
  margin-top: 20px;

  .cart {
    background: #fff;
    color: #666;

    table {
      border-spacing: 0;
      border-collapse: collapse;
      line-height: 24px;

      th,
      td {
        padding: 10px;
        border-bottom: 1px solid #f5f5f5;

        &:first-child {
          text-align: left;
          padding-left: 30px;
          color: #999;
        }
      }

      th {
        font-size: 16px;
        font-weight: normal;
        line-height: 50px;
      }
    }
  }

  .cart-none {
    text-align: center;
    padding: 120px 0;
    background: #fff;

    p {
      color: #999;
      padding: 20px 0;
    }
  }

  .tc {
    text-align: center;

    a {
      color: $xtxColor;
    }

    .xtx-numbox {
      margin: 0 auto;
      width: 120px;
    }
  }

  .red {
    color: $priceColor;
  }

  .green {
    color: $xtxColor;
  }

  .f16 {
    font-size: 16px;
  }

  .goods {
    display: flex;
    align-items: center;

    img {
      width: 100px;
      height: 100px;
    }

    >div {
      width: 280px;
      font-size: 16px;
      padding-left: 10px;

      .attr {
        font-size: 14px;
        color: #999;
      }
    }
  }

  .action {
    display: flex;
    background: #fff;
    margin-top: 20px;
    height: 80px;
    align-items: center;
    font-size: 16px;
    justify-content: space-between;
    padding: 0 30px;

    .xtx-checkbox {
      color: #999;
    }

    .batch {
      a {
        margin-left: 20px;
      }
    }

    .red {
      font-size: 18px;
      margin-right: 20px;
      font-weight: bold;
    }
  }

  .tit {
    color: #666;
    font-size: 16px;
    font-weight: normal;
    line-height: 50px;
  }

}
</style>
