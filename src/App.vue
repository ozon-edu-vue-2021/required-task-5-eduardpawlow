<template>
  <div id="app">
    <ep-header />
    <router-view />
  </div>
</template>

<script>
import EpHeader from '@/components/EpHeader.vue'

export default {
  name: 'App',
  components: {
    EpHeader,
  },
  beforeMount() {
    try {
      this.$store.dispatch('getProducts')
    } catch (error) {}
  },
}
</script>

<style>
:root {
  --color-primary: #265af7;
  --color-primary-hover: #0742f3;
  --color-red: #f91155;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#app {
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  background-color: #fafafa;
}

a {
  text-decoration: none;
}

a:visited {
  color: inherit;
}

.container {
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
}

.page {
  padding: 60px 0;
}

.page__title {
  margin-bottom: 20px;
}

.btn {
  border: none;
  background: transparent;
  padding: 10px 30px;
  border-radius: 5px;

  font-size: 16px;
  cursor: pointer;
}

.btn:active {
  opacity: 0.9;
}

.btn.btn--primary {
  background: var(--color-primary);

  color: #fff;
}

.btn.btn--primary:hover {
  background: var(--color-primary-hover);
}
</style>
