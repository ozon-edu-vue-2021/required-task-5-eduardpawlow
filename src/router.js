import Vue from 'vue'
import VueRouter from 'vue-router'

import GoodsPage from '@/pages/Goods.vue'
import CartPage from '@/pages/Cart.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/goods', component: GoodsPage },
  { path: '/cart', component: CartPage },
  { path: '*', redirect: '/goods' },
]

const router = new VueRouter({ mode: 'history', routes })

export default router
