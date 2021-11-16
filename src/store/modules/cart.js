import Vue from 'vue'

export default {
  state: () => ({
    items: {
      2597: {
        info: {
          id: 2597,
          uid: 'b72e257f-bc35-4953-8bbd-992849f0beb4',
          dish: 'Stinky Tofu',
          description:
            'Breaded fried chicken with waffles, and a side of maple syrup.',
          ingredient: 'Cauliflower',
          measurement: '3 tablespoon',
          img: '/img/products/2.webp',
          price: 853,
        },
        count: 4,
      },
      3555: {
        info: {
          id: 3555,
          uid: 'e60e50f0-df2d-4f2b-8306-907dbb087140',
          dish: 'Vegetable Soup',
          description:
            'Two butter croissants of your choice (plain, almond or cheese). With a side of herb butter or house-made hazelnut spread.',
          ingredient: 'Margarine',
          measurement: '1/2 tablespoon',
          img: '/img/products/1.webp',
          price: 3084,
        },
        count: 2,
      },
      4593: {
        info: {
          id: 4593,
          uid: '1ba63003-8883-4613-bd62-33ce0f42d11a',
          dish: 'Mushroom Risotto',
          description:
            'Three egg omelet with Roquefort cheese, chives, and ham. With a side of roasted potatoes, and your choice of toast or croissant.',
          ingredient: 'Aniseed',
          measurement: '1/3 gallon',
          img: '/img/products/6.webp',
          price: 258,
        },
        count: 4,
      },
      4672: {
        info: {
          id: 4672,
          uid: 'f5bbe8eb-698e-4529-8176-4767ec501a32',
          dish: 'Meatballs with Sauce',
          description:
            'Breaded fried chicken with waffles, and a side of maple syrup.',
          ingredient: 'Arborio Rice',
          measurement: '2 gallon',
          img: '/img/products/8.webp',
          price: 1644,
        },
        count: 2,
      },
      4865: {
        info: {
          id: 4865,
          uid: 'fe40ae49-2af3-464f-88c5-3efb83e9568b',
          dish: 'Tiramisù',
          description:
            'Three eggs with cilantro, tomatoes, onions, avocados and melted Emmental cheese. With a side of roasted potatoes, and your choice of toast or croissant.',
          ingredient: 'Mackerel',
          measurement: '1/4 tablespoon',
          img: '/img/products/8.webp',
          price: 2320,
        },
        count: 2,
      },
      5151: {
        info: {
          id: 5151,
          uid: 'b69bde11-45b5-4218-837c-77ea9c13b3f2',
          dish: 'Seafood Paella',
          description:
            '28-day aged 300g USDA Certified Prime Ribeye, rosemary-thyme garlic butter, with choice of two sides.',
          ingredient: 'Carrot',
          measurement: '1/4 teaspoon',
          img: '/img/products/2.webp',
          price: 2429,
        },
        count: 3,
      },
      7376: {
        info: {
          id: 7376,
          uid: 'e1923178-901a-4a58-8cc0-185ca3f71900',
          dish: 'Philadelphia Maki',
          description:
            'Three egg whites with spinach, mushrooms, caramelized onions, tomatoes and low-fat feta cheese. With herbed quinoa, and your choice of rye or whole-grain toast.',
          ingredient: 'Common Cultivated Mushrooms',
          measurement: '2 quart',
          img: '/img/products/4.webp',
          price: 1012,
        },
        count: 2,
      },
      7433: {
        info: {
          id: 7433,
          uid: '668ff5df-f307-4ff2-ab1a-4e22b2a2c355',
          dish: 'Pho',
          description:
            'Fresh Norwegian salmon, lightly brushed with our herbed Dijon mustard sauce, with choice of two sides.',
          ingredient: 'Harissa',
          measurement: '1/4 gallon',
          img: '/img/products/1.webp',
          price: 3189,
        },
        count: 3,
      },
    },
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
          acc.price += t.info.price
          acc.count += Number(t.count)

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
