<template>
  <div class="count-control">
    <button class="btn count-control__btn" @click="$emit('decrease')">
      <MinusIcon />
    </button>
    <div class="count-control__label">{{ count }} <span>шт.</span></div>
    <button class="btn count-control__btn" @click="$emit('increase')">
      <PlusIcon />
    </button>
  </div>
</template>

<script>
import PlusIcon from '@/assets/svg/plus_24.svg?inline'
import MinusIcon from '@/assets/svg/minus_24.svg?inline'

export default {
  components: { MinusIcon, PlusIcon },
  props: {
    count: {
      type: [Number, String],
      default: 0,
    },
  },
}
</script>

<style scoped>
.count-control {
  display: flex;
  align-items: center;
}

.count-control__btn {
  display: flex;
  align-items: center;
  padding: 7px;
  border-radius: 5px;
  background-color: #eff3f6;
}

.count-control__btn:hover {
  background-color: #dddddd;
}

.count-control__label {
  margin: 0 12px;

  font-size: 20px;
  line-height: 160%;
}

.count-control__label span {
  font-size: 12px;
}
</style>