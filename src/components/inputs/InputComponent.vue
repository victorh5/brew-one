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
</template>