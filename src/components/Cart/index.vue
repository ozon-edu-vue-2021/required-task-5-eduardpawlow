<template>
  <div class="cart">
    <div v-if="cart.length" class="cart__order">
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
              <div class="info-card__value">{{ totalCartInfo.count }} шт.</div>
            </div>
            <div class="info-card__prop">
              <div class="info-card__label">Общая стоимость</div>
              <div class="info-card__value">{{ totalCartInfo.price }} ₽</div>
            </div>
          </div>
          <div class="info-card__footer">
            <button class="btn btn--cart" @click="makeOrder">Оформить</button>
          </div>
        </div>
      </div>
    </div>

    <template v-else>
      <div class="cart__empty">
        <div class="cart__empty-msg">В корзине пусто</div>
        <router-link class="cart__empty-link" to="/goods"
          >За покупками!</router-link
        >
      </div>
    </template>
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
  methods: {
    makeOrder() {
      let order = this.cart.reduce((acc, product) => {
        const { dish, price } = product.info

        return (acc += `${dish} -- ${product.count} шт.:   ${
          price * product.count
        } Р\n`)
      }, '')

      order += `\n\nКол-во: ${this.totalCartInfo.count} шт.\n`
      order += `Стоимость: ${this.totalCartInfo.price} Р`

      window.alert(order)
    },
  },
}
</script>
<style scoped>
.cart__order {
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

.cart__empty {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  font-size: 24px;
  text-align: center;
}

.cart__empty-link {
  margin-top: 12px;
  color: var(--color-primary);
}

.cart__empty-link:hover {
  color: var(--color-primary-hover);
  text-decoration: underline;
}
</style>