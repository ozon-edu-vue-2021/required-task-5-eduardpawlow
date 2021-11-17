<template>
  <div class="page page--favorites">
    <div class="page__content container">
      <Backlink />
      <h1 class="page__title">Избранное</h1>
      <ProductsTable v-if="favorites.length" :items="favorites" />
      <div v-else class="page-favorites__empty">
        <span>Здесь ничего нет</span>
      </div>
    </div>
  </div>
</template>

<script>
import Backlink from '@/components/UI/Backlink.vue'
import ProductsTable from '@/components/Products/Table.vue'

export default {
  components: {
    Backlink,
    ProductsTable,
  },
  data() {
    return {
      favorites: [],
    }
  },
  beforeMount() {
    this.favorites = this.$store.getters.favoriteProducts
  },
}
</script>

<style scoped>
.page-favorites__empty {
  text-align: center;
  font-size: 24px;
}
</style>
