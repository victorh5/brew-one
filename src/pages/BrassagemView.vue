<script lang="ts" setup>
import { ref } from 'vue'
import RampComponent from '@/components/ramp/RampComponent.vue'
import InputComponent from '@/components/inputs/InputComponent.vue'
import { router } from '@/routes'
import { useSweetAlert } from '@/composables'
import ButtonComponent from '@/components/actions/ButtonComponent.vue'

const input1 = ref('')
const input2 = ref('')
const { success } = useSweetAlert()

const sendData = async () => {
  await success('Sucesso', 'Dados enviados com sucesso!')
  await router.push({ name: 'follow-up-brass' })
}
</script>

<template>
  <section class="py-4 px-8">
    <div class="flex justify-center">
      <img src="../assets/logo2.png" alt="Logo Brew One">
    </div>
    <div class="py-4">
      <h3>Defina as opções de brassagem:</h3>

      <div class="py-6 px-2">
        <InputComponent
          label="Aquecimento"
          placeholder="Temperatura (C)"
          v-model="input1"
        />
        <RampComponent />
        <InputComponent
          label="Fervura"
          placeholder="Tempo (Minutos)"
          v-model="input2"
          margin_top
        />
      </div>
    </div>
    <div class="grid grid-cols-2 gap-4 px-2 pt-4">
      <ButtonComponent @event="router.go(-1)">Cancelar</ButtonComponent>
      <ButtonComponent @event="sendData">Avançar</ButtonComponent>
    </div>
  </section>
</template>