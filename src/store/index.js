import Vue from 'vue'
import Vuex from 'vuex'

import productsModule from './modules/products'
import cartModule from './modules/cart'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    products: productsModule,
    cart: cartModule,
  },
})

export default store
