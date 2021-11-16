<template>
  <div class="page page__cart">
    <div class="page__content container">
      <h1 class="page__title">Корзина</h1>
      <Cart />
    </div>
  </div>
</template>

<script>
import Cart from '@/components/Cart'

export default {
  components: { Cart },
}
</script>
