<script lang="ts" setup>
import { ref } from 'vue'
import RampComponent from '@/components/ramp/RampComponent.vue'
import InputComponent from '@/components/inputs/InputComponent.vue'
import { router } from '@/routes'
import { useSweetAlert } from '@/composables'

const statement = 'Defina as opções de brassagem'
const input1 = ref('')
const input2 = ref('')
const { success } = useSweetAlert()

const sendData = async () => {
  await success('Sucesso', 'Dados enviados com sucesso!')
  await router.push({ name: 'ramp' })
}
const cancel = async () => {
  await router.push({name: 'home'})
}
</script>

<template>
  <section id="bras">
    <div class="img">
      <img src="../assets/logo2.png" alt="Logo Brew One">
    </div>
    <div class="content">
      <p>{{ statement }}:</p>

      <div class="main">
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
  </section>
</template>