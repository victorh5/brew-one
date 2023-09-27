<script lang="ts" setup>
import { useRouter } from 'vue-router'
import BrewButton from '@/components/actions/BrewButton.vue'

const router = useRouter()

const redirect = async (route_name: 'brewing' | 'fermentation') => await router.push({ name: route_name })
</script>

<template>
  <section class="w-full h-full">
    <div class="flex justify-center">
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