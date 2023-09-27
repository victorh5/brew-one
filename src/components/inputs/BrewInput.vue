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
const { placeholder, label } = toRefs(props)

const test = (evt: Event) => {
  const target = (<HTMLInputElement>evt.target)
  emit('update:modelValue', target.value)
}
</script>

<template>
  <div :class="{'grid grid-rows-2': label}">
    <label
      class="font-bold"
      v-if="label"
    >{{ label }}</label>
    <input
      :value="modelValue"
      :placeholder="placeholder"
      class="p-2 w-full rounded-md text-black focus:outline-none"
      :type="type"
      @input="test"
    >
  </div>
</template>