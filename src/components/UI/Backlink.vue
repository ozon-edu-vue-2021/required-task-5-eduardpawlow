<template>
  <div class="backlink">
    <router-link :to="to">{{ label }}</router-link>
  </div>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: '/goods',
    },
    label: {
      type: String,
      default: 'Вернуться к товарам',
    },
  },
}
</script>

<style scoped>
.backlink {
  color: var(--color-primary);
  margin-bottom: 10px;
}
</style>