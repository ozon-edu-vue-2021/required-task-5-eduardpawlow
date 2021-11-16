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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  background-color: #fafafa;
  box-sizing: border-box;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
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
  background: #265af7;

  color: #fff;
}

.btn.btn--primary:hover {
  background: #0742f3;
}
</style>
