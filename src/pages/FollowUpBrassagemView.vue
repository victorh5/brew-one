<script lang="ts" setup>
import TemperatureComponent from '@/components/inputs/TemperatureComponent.vue'
import ToggleComponent from '@/components/inputs/ToggleComponent.vue'
import { router } from '@/routes'
import { useSweetAlert } from '@/composables'

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
      <h3 class="font-bold text-2xl">Aquecimento</h3>

      <div class="py-6 px-2">
        <TemperatureComponent />
        <div class="grid grid-cols-2">
          <ToggleComponent title="Resistência" />
          <ToggleComponent title="Bomba" />
        </div>
      </div>
    </div>
  </section>
</template>