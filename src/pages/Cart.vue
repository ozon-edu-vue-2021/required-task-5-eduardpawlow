<template>
  <div class="page page--cart">
    <div class="page__content container">
      <Backlink />
      <h1 class="page__title">Корзина</h1>
      <Cart />
    </div>
  </div>
</template>

<script>
import Backlink from '@/components/UI/Backlink.vue'
import Cart from '@/components/Cart'

export default {
  components: { Cart, Backlink },
}
</script>
