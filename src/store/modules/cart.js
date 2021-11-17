import Vue from 'vue'

export default {
  state: () => ({
    items: {},
  }),
  mutations: {
    ADD_TO_CART(state, product) {
      let cartProduct = state.items[product.id]

      if (!cartProduct) {
        cartProduct = {
          info: product,
          count: 0,
        }

        Vue.set(state.items, product.id, cartProduct)
      }

      cartProduct.count += 1
    },
    DELETE_FROM_CART(state, product) {
      let cartProduct = state.items[product.id]

      if (!cartProduct) return

      cartProduct.count -= 1

      if (!cartProduct.count) {
        Vue.delete(state.items, product.id)
      }
    },
  },
  actions: {},
  getters: {
    totalInfo(state) {
      return Object.values(state.items).reduce(
        (acc, t) => {
          acc.price += t.info.price * t.count
          acc.count += t.count

          return acc
        },
        {
          price: 0,
          count: 0,
        }
      )
    },
  },
}
