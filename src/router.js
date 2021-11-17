import Vue from 'vue'
import VueRouter from 'vue-router'

import GoodsPage from '@/pages/Goods.vue'
import CartPage from '@/pages/Cart.vue'
import FavoritesPage from '@/pages/Favorites.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/goods', component: GoodsPage },
  { path: '/cart', component: CartPage },
  { path: '/favorites', component: FavoritesPage },
  { path: '*', redirect: '/goods' },
]

const router = new VueRouter({ mode: 'history', routes })

export default router
