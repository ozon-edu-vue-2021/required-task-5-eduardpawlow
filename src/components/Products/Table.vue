<template>
  <div class="products-grid">
    <ProductCard
      v-for="product in items"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import ProductCard from './Card.vue'

export default {
  components: {
    ProductCard,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped>
.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
}
</style>