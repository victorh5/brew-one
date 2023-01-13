<script lang="ts" setup>
defineProps<{
  label: string
  loading?: boolean
}>()
const emit = defineEmits(['event'])
</script>

<template>
    <button
      @click="emit('event')"
    >
      <slot></slot>
    </button>
</template>