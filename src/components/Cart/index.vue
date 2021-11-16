<template>
  <div class="cart">
    <div class="cart__products">
      <CartCard
        v-for="product in cart"
        :key="product.info.id"
        :product="product.info"
        :count="product.count"
      />
    </div>
    <div class="cart__info">
      <div class="info-card">
        <div class="info-card__prop-list">
          <div class="info-card__prop">
            <div class="info-card__label">Кол-во товаров</div>
            <div class="info-card__value">{{ totalCartInfo.count }} товар</div>
          </div>
          <div class="info-card__prop">
            <div class="info-card__label">Общая стоимость</div>
            <div class="info-card__value">{{ totalCartInfo.price }} ₽</div>
          </div>
        </div>
        <div class="info-card__footer">
          <button class="btn btn--cart">Оформить</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CartCard from './CartCard'

export default {
  components: {
    CartCard,
  },
  computed: {
    cart() {
      return Object.values(this.$store.state.cart.items)
    },
    totalCartInfo() {
      return this.$store.getters.totalInfo
    },
  },
}
</script>
<style scoped>
.cart {
  display: grid;
  grid-template-columns: 1fr 400px;
  grid-gap: 32px;
}

.info-card {
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 20px;
  background: #fff;
}

.info-card__title {
  font-size: 20px;
}

.info-card__prop-list {
}

.info-card__prop {
  display: flex;
  justify-content: space-between;

  font-size: 16px;
  font-weight: 600;
}

.info-card__prop:not(:last-child) {
  margin-bottom: 16px;
}

.info-card__label {
}

.info-card__value {
  color: rgba(0, 91, 255, 1);
}

.info-card__footer {
  width: 100%;
  margin-top: 40px;
}

.btn--cart {
  width: 100%;
  background: #10ad44;
  color: #fff;
}

.btn.btn--cart:hover {
  background: #0f9e3f;
}
</style>