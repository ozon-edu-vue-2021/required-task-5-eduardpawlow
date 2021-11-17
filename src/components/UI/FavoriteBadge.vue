<template>
  <div class="favorite-badge" :class="{ active }">
    <button @click="$emit('click')"><HeartIcon /></button>
  </div>
</template>

<script>
import HeartIcon from '@/assets/svg/heart_24.svg?inline'

export default {
  components: {
    HeartIcon,
  },
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
.favorite-badge button {
  display: flex;
  padding: 5px 4px 3px 4px;
  border: none;
  border-radius: 50%;
  background: #fff;

  color: inherit;

  cursor: pointer;
}

.favorite-badge button:active {
  transform: scale(0.95);
}

.favorite-badge:hover {
  color: var(--color-red);
}

.favorite-badge.active svg path:first-child,
.favorite-badge.active svg path:last-child {
  fill: var(--color-red);
}
</style>