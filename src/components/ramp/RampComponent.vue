<script lang="ts" setup>
import { ref } from 'vue'
import { Input } from '@/models'
import BInput from '../inputs/InputComponent.vue'

const emit = defineEmits(['get-params'])
const inputs = ref<Input[]>([
  { temperature: '', time: '' }
])

const addRamp = () => {
  emit('get-params', inputs.value)
  inputs.value.push({
    temperature: '',
    time: ''
  })
}
const removeRamp = () => {
  const idx = inputs.value.length -1
  if (idx != 0) inputs.value.splice(idx, 1)
  else return
}
</script>

<template>
  <div v-for="(input, i) in inputs" :key="i">
    <p>Rampa {{i + 1}}</p>
    <div class="inputs">
      <b-input
        placeholder="Temperatura (C)"
        v-model="input.temperature"
        type="number"
      />
      <b-input
        placeholder="Tempo (minutos)"
        v-model="input.time"
        type="number"
      />
    </div>
  </div>
</template>