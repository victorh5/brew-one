<script setup lang="ts">
import { ref } from 'vue'
import BLargeInput from '@/components/inputs/BLargeInputComponent.vue'

const test = ref('')
</script>

<template>
  <b-large-input v-model="test" placeholder="Teste" />
</template>
