<script lang="ts" setup>
defineProps<{
  loading?: boolean
}>()
const emit = defineEmits(['event'])
</script>

<template>
  <button
    @click="emit('event')"
    class="py-2 bg-white text-black w-full rounded-md"
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