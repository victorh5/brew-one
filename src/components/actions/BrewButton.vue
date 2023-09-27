<script lang="ts" setup>
import { tv } from 'tailwind-variants'
import { ButtonHTMLAttributes } from 'vue'

interface ButtonProps extends ButtonHTMLAttributes {
  loading?: boolean
}

defineProps<ButtonProps>()

const button = tv({
  base: 'flex items-center justify-center h-10 px-4 rounded-md text-sm bg-zinc-50 text-zinc-900 hover:bg-zinc-200'
})

const emit = defineEmits(['event'])
</script>

<template>
  <button
    @click="emit('event')"
    :class="button()"
  >
    <div
      v-if="loading"
      class="
        border-4 border-t-4 border-t-black
        rounded-full h-5 w-5
        animate-spin
      "
    />
    <slot v-else></slot>
  </button>
</template>