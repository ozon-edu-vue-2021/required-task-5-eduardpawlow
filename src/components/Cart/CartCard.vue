<template>
  <div class="cart-card">
    <div class="cart-card__image">
      <img :src="product.img" />
    </div>
    <div class="cart-card__title">{{ product.dish }}</div>
    <div class="cart-card__controls">
      <CountControl
        :count="count"
        @decrease="updateCart('DELETE_FROM_CART', product)"
        @increase="updateCart('ADD_TO_CART', product)"
      />
      <div class="cart-card__price">{{ product.price * +count }} ₽</div>
    </div>
  </div>
</template>

<script>
import CountControl from '@/components/UI/CountControl'

export default {
  components: { CountControl },

  props: {
    product: {
      type: Object,
      required: true,
      default: () => ({}),
    },
    count: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    updateCart(type, product) {
      this.$store.commit(type, product)
    },
  },
}
</script>

<style scoped>
.cart-card {
  display: flex;
  padding: 20px 10px;
}

.cart-card > *:not(:last-child) {
  margin-right: 20px;
}

.cart-card:not(:last-child) {
  border-bottom: 1px solid #ccc;
}

.cart-card__image {
  width: 150px;
  height: 150px;
  margin-right: 20px;
  border-radius: 10px;

  overflow: hidden;
}

.cart-card__image img {
  width: 100%;
  height: 100%;

  object-fit: cover;
}

.cart-card__title {
  flex: 2;

  font-size: 16px;
  line-height: 160%;
}

.cart-card__controls {
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-end;

  font-size: 16px;
  line-height: 160%;
}

.cart-card__price {
  margin-top: 20px;

  font-size: 20px;
  font-weight: 600;
}
</style>