<script lang="ts" setup>
import { ref } from 'vue'
import { Input } from '@/models'
import BInput from '../inputs/BInputComponent.vue'
import BDoubleButton from '../actions/BDoubleButtonComponent.vue'

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
    <div class="row">
      <div class="col">
        <b-input
          placeholder="Temperatura (C)"
          v-model="input.temperature"
          type="number"
        />
      </div>
      <div class="col">
        <b-input
          placeholder="Tempo (minutos)"
          v-model="input.time"
          type="number"
        />
      </div>
    </div>
  </div>
  <b-double-button
    label1="Adicionar Rampa"
    label2="Remover Rampa"
    @first-event="addRamp"
    @second-event="removeRamp"
  />
</template>

<style lang="scss" scoped>
input {
  padding: 10px 20px;
  border-radius: 5px;
  margin-right: 10px;
}
p {
  margin-bottom: 5px;
  margin-top: 10px;
  font-size: 16px;
  font-weight: bolder;
}
.row {
  width: 100%;
  display: flex;

  .col {
    width: 50%;
    &:first-child {
      margin-right: 5px;
    }
  }
}
</style>