<template>
  <div class="product-card">
    <FavoriteBadge
      :active="product.isFavorite"
      @click="toggleFavorite(product.id)"
    />
    <div class="product-card__image">
      <img :src="product.img" />
    </div>
    <div class="product-card__body">
      <div class="product-card__price">{{ product.price }} ₽</div>
      <div class="product-card__title">{{ product.dish }}</div>
      <div class="product-card__descr">{{ product.description }}</div>
    </div>
    <div class="product-card__footer">
      <button
        v-if="!productInCart"
        class="btn btn--primary"
        @click="updateCart('ADD_TO_CART', product)"
      >
        В корзину
      </button>

      <CountControl
        v-else
        :count="productInCart.count"
        @decrease="updateCart('DELETE_FROM_CART', product)"
        @increase="updateCart('ADD_TO_CART', product)"
      />
    </div>
  </div>
</template>

<script>
import productCardMixin from '@/mixins/productCard'

export default {
  mixins: [productCardMixin],
  computed: {
    cart() {
      return this.$store.state.cart.items
    },
    productInCart() {
      return this.cart[this.product.id] || null
    },
  },
}
</script>

<style scoped>
.product-card {
  position: relative;
  display: flex;
  flex-direction: column;
}

.favorite-badge {
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 1;
}

.product-card__image {
  position: relative;
  padding-top: 100%;
  border-radius: 10px;

  overflow: hidden;
}

.product-card__image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  object-fit: cover;
}

.product-card__body {
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 16px;
  padding: 0 8px;
}

.product-card__price {
  margin-bottom: 8px;

  font-size: 20px;
  font-weight: 600;
}

.product-card__title {
  margin-bottom: 8px;

  font-size: 18px;
  line-height: 160%;
}

.product-card__descr {
  display: flex;
  display: -webkit-box;
  max-height: 54px;

  font-size: 14px;
  line-height: 18px;

  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

.product-card__footer {
  margin-top: 40px;
}
</style>