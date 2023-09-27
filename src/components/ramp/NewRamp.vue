<script lang="ts" setup>
import { ref } from 'vue'
import { Input } from '@/models'
import BrewButton from '../actions/BrewButton.vue'
import BrewInput from '../inputs/BrewInput.vue'

const emit = defineEmits(['get-params'])
const inputs = ref<Input[]>([
  { temperature: '', time: '' }
])

const addRamp = () => {
  inputs.value.push({
    temperature: '',
    time: ''
  })
}
const removeRamp = () => {
  if (inputs.value.length > 1) inputs.value.pop()
  else return
}
</script>

<template>
  <div v-for="(input, i) in inputs" :key="i" class="pt-4">
    <label class="font-bold">Rampa {{i + 1}}</label>
    <div class="grid grid-cols-2 gap-4 mt-4">
      <brew-input
        placeholder="Temperatura (C)"
        v-model="input.temperature"
        inputmode="numeric"
      />
      <brew-input
        placeholder="Tempo (minutos)"
        v-model="input.time"
        inputmode="numeric"
      />
    </div>
  </div>
  <div class="grid grid-cols-2 gap-4 mt-2 pb-4">
    <brew-button @event="addRamp">Adicionar</brew-button>
    <brew-button @event="removeRamp">Remover</brew-button>
  </div>
</template>