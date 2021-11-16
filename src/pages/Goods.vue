<template>
  <div class="page page__goods">
    <div class="page__content container">
      <h1 class="page__title">Товары</h1>
      <ProductsTable :items="products" />
    </div>
  </div>
</template>

<script>
import ProductsTable from '@/components/Products/Table.vue'

export default {
  components: {
    ProductsTable,
  },
  data() {
    return {
      isLoading: true,
    }
  },
  computed: {
    products() {
      return this.$store.state.products.items
    },
  },
}
</script>
