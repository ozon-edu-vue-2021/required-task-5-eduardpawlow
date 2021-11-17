const getRandomInt = (max = 100, min = 0) => {
  return Math.floor(Math.random() * (max - min) + min)
}

const getRandomImg = () => {
  return `/img/products/${getRandomInt(11, 1)}.webp`
}

const getRandomPrice = () => {
  return getRandomInt(100, 4000)
}

export default {
  state: () => ({
    items: [],
  }),
  mutations: {
    SET_GOODS(state, newProducts) {
      state.items = newProducts
    },
    TOGGLE_FAVORITE(state, productId) {
      const product = state.items.find((t) => +t.id === +productId)

      if (product) product.isFavorite = !product.isFavorite
    },
  },
  actions: {
    async getProducts({ commit }) {
      try {
        const res = await fetch(
          'https://random-data-api.com/api/food/random_food?size=30'
        )
        let productList = await res.json()

        productList = productList.map((t) => {
          t.img = getRandomImg()
          t.price = getRandomPrice()
          t.isFavorite = false
          return t
        })
        commit('SET_GOODS', productList)
      } catch (err) {
        console.error(err)
      }
    },
  },
  getters: {
    favoriteProducts(state) {
      return state.items.filter((product) => product.isFavorite)
    },
  },
}
