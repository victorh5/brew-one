<script lang="ts" setup>
import { Input } from '@/models'
import { router } from '@/routes'
import { useSweetAlert } from '@/composables'
import NewRamp from '@/components/ramp/NewRamp.vue'
import BrewButton from '@/components/actions/BrewButton.vue'

const { success } = useSweetAlert()

const updateRampValues = (newValue: Input) => {
  console.log(newValue)
}
const sendData = async () => {
  await success('Sucesso', 'Dados enviados com sucesso!')
}
</script>

<template>
  <section class="py-4 px-8">
    <div class="flex justify-center">
      <img src="@/assets/logo2.png" alt="Logo Brew One">
    </div>
    <div class="py-4">
      <h3>Defina as opções de fermentação:</h3>

      <div class="main">
        <new-ramp @get-params="updateRampValues" />
      </div>
      <div class="grid grid-cols-2 gap-4 py-6">
        <brew-button @event="router.go(-1)">Cancelar</brew-button>
        <brew-button @event="sendData">Avançar</brew-button>
      </div>
    </div>
  </section>
</template>