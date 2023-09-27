<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { SafeArea } from 'capacitor-plugin-safe-area'
import BrewButton from '@/components/actions/BrewButton.vue'

const insets = ref<{
    top: number
    bottom: number
}>({ top: 0, bottom: 0})

onMounted(async () => {
    const safeArea = await SafeArea.getSafeAreaInsets()
    insets.value = safeArea.insets
})
const router = useRouter()

const redirect = async (route_name: 'brewing' | 'fermentation') => await router.push({ name: route_name })
</script>

<template>
  <section class="w-full h-full">
    <div
      class="z-[99] fixed top-0 w-full"
      :style="`height: ${insets.top}px;`"
    ></div>
    <div
      class="flex justify-center pb-4"
      :style="`padding-top: ${insets.top === 0 ? 16 : 16 + insets.top}px`"
    >
      <img src="../assets/logo1.png" alt="Logo Brew One">
    </div>
    <div class="text-center grid gap-4 py-10">
      <h1 class="font-bold text-2xl">Seja Bem-vindo</h1>
      <p class="font-regular text-sm">Escolha o procedimento que deseja realizar!</p>
    </div>
    <div class="grid grid-rows-2 gap-4 justify-center">
      <brew-button class="w-36" @event="redirect('brewing')">Brassagem</brew-button>
      <brew-button class="w-36" @event="redirect('fermentation')">Fermentação</brew-button>
    </div>
  </section>
</template>