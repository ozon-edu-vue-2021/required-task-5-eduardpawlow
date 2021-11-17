<template>
  <header class="header">
    <div class="container header__content">
      <nav class="header__nav">
        <router-link class="header__nav-item" to="/favorites">
          <div class="nav-item__icon">
            <HeartIcon />
          </div>
          <div class="nav-item__label">Избранное</div>
        </router-link>
        <router-link class="header__nav-item" to="/cart">
          <div class="nav-item__icon">
            <CartIcon />
          </div>
          <div class="nav-item__label">Корзина</div>
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script>
import CartIcon from '@/assets/svg/cart_24.svg?inline'
import HeartIcon from '@/assets/svg/heart_24.svg?inline'

export default {
  components: {
    CartIcon,
    HeartIcon,
  },
}
</script>

<style scoped>
.header {
  border-bottom: 1px solid #2c3e50;
}

.header__content {
  display: flex;
  justify-content: flex-end;
  min-height: 60px;
}

.header__nav {
  display: flex;
  align-items: center;
}

.header__nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  border-radius: 5px;
}

.header__nav-item:hover {
  color: var(--color-primary-hover);
}

.nav-item__label {
  font-size: 14px;
  line-height: 18px;
}
</style>