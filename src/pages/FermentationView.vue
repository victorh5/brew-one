<script lang="ts" setup>
import RampComponent from '@/components/ramp/RampComponent.vue'
import { Input } from '@/models'
import { router } from '@/routes'
import { useSweetAlert } from '@/composables'

const { success } = useSweetAlert()

const updateRampValues = (newValue: Input) => {
  console.log(newValue)
}
// const sendData = async () => {
//   await success('Sucesso', 'Dados enviados com sucesso!')
// }
// const cancel = async () => await router.push({ name: 'home' })
</script>

<template>
  <section id="bras">
    <div class="img">
      <img src="../assets/logo2.png" alt="Logo Brew One">
    </div>
    <div class="content">
      <p>Defina as opções de fermentação:</p>

      <div class="main">
        <RampComponent @get-params="updateRampValues" />
      </div>
    </div>
  </section>
</template>