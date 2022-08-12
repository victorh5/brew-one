<script lang="ts" setup>
import { computed, useCssModule } from 'vue'

const props = defineProps<{
  label: string
  loading?: boolean
}>()
const emit = defineEmits(['event'])
const style = useCssModule()
console.log(style)
const buttonClasses = computed(() => {
  if (props.loading) {
    return [style['vh-button'], style['vh-button--loading']]
  } else return style['vh-button']
})
</script>

<template>
  <div>
    <button
      :class="buttonClasses"
      @click="emit('event')"
    >
      <span :class="$style['vh-button__text']">{{ props.label }}</span>
    </button>
  </div>
</template>

<style lang="scss" module>
.vh-button {
  width: 150px;
  padding: 10px 20px;
  position: relative;
  background-color: #fff;
  border: none;
  outline: none;
  border-radius: 2px;
  cursor: pointer;

  &:active {
    background-color: #BFBABA;
  }

  .vh-button__text {
    font-size: 12px;
    font-weight: 400;
    color: #000;
    transition: all 0.2s;
  }
}
.vh-button--loading .vh-button__text {
  visibility: hidden;
  opacity: 0;
}
.vh-button--loading::after {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border: 4px solid transparent;
  border-top-color: #000;
  border-radius: 50%;
  animation: vh-button-loading-spinner 1s ease infinite;
}
@keyframes vh-button-loading-spinner {
  from {
    transform: rotate(0turn);
  }
  to {
    transform: rotate(1turn);
  }
}
</style>