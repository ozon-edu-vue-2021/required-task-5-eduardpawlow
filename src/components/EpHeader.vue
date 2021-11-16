<template>
  <header class="header">
    <div class="container header__content">
      <nav class="header__nav">
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

export default {
  components: {
    CartIcon,
  },
}
</script>

<style scoped>
.header {
  border-bottom: 1px solid gray;
}

.header__content {
  display: flex;
  justify-content: flex-end;
  min-height: 60px;
}

.header__nav {
  display: flex;
  align-items: center;

  color: rgba(0, 91, 255, 1);
}

.header__nav:hover {
  background: rgba(0, 91, 255, 0.2);
  color: #000;
}

.header__nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
}

.nav-item__label {
  font-size: 14px;
  line-height: 18px;
}
</style>