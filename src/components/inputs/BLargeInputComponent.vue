<script lang="ts" setup>
import { toRefs, withDefaults } from 'vue'

interface Props {
  modelValue: string
  placeholder: string
  label?: string
  margin_top?: boolean
  type?: string
}

const emit = defineEmits(['update:modelValue'])
const props = withDefaults(defineProps<Props>(), {
  type: 'string'
})
const { placeholder, label, margin_top } = toRefs(props)

const test = (evt: Event) => {
  const target = (<HTMLInputElement>evt.target)
  emit('update:modelValue', target.value)
}
</script>

<template>
  <div :class="{'margin-top': margin_top}">
    <label
      class="label-input"
      v-if="label"
    >{{ label }}</label>
    <input
      :value="modelValue"
      :placeholder="placeholder"
      class="text-input"
      :type="type"
      @input="test"
    >
  </div>
</template>

<style lang="scss" scoped>
.label-input {
  font-size: 16px;
  font-weight: bolder;
}
.text-input {
  padding: 10px 20px;
  border-radius: 5px;
  margin-right: 10px;
  box-sizing: border-box;
  width: 100%;
  margin-top: 5px;

  &:focus {
    outline: none;
  }
}

.margin-top {
  margin-top: 15px;
}
</style>