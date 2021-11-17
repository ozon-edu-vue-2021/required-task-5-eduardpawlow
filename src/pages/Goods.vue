<template>
  <div class="page page--goods">
    <div class="page__content container">
      <h1 class="page__title">Товары</h1>
      <ProductsTable v-if="products.length" :items="products" />
      <Preloader v-else />
    </div>
  </div>
</template>

<script>
import ProductsTable from '@/components/Products/Table.vue'
import Preloader from '../components/Preloader.vue'

export default {
  components: {
    ProductsTable,
    Preloader,
  },
  computed: {
    products() {
      return this.$store.state.products.items
    },
  },
}
</script>
