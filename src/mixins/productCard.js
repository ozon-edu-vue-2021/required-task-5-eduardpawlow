import CountControl from '@/components/UI/CountControl'
import FavoriteBadge from '@/components/UI/FavoriteBadge.vue'

export default {
  components: { CountControl, FavoriteBadge },
  props: {
    product: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
  methods: {
    updateCart(type, product) {
      this.$store.commit(type, product)
    },
    toggleFavorite(productId) {
      this.$store.commit('TOGGLE_FAVORITE', productId)
    },
  },
}
