<script lang="ts" setup>
import { ref } from 'vue'
import { Input } from '@/models'
import ButtonComponent from '../actions/ButtonComponent.vue';

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
  if (inputs.value.length > 1) inputs.value.pop()
  else return
}
</script>

<template>
  <div v-for="(input, i) in inputs" :key="i" class="pt-4">
    <label class="font-bold">Rampa {{i + 1}}</label>
    <div class="grid grid-cols-2 gap-4 mt-4">
      <input
        placeholder="Temperatura (C)"
        v-model="input.temperature"
        class="p-2 rounded-md text-black focus:outline-none"
        type="number"
      />
      <input
        placeholder="Tempo (minutos)"
        class="p-2 rounded-md text-black focus:outline-none"
        v-model="input.time"
        type="number"
      />
    </div>
  </div>
  <div class="grid grid-cols-2 gap-4 mt-2 pb-4">
    <ButtonComponent @event="addRamp">Adicionar</ButtonComponent>
    <ButtonComponent @event="removeRamp">Remover</ButtonComponent>
  </div>
</template>