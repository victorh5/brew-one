<script lang="ts" setup>
import { useRouter } from 'vue-router'
import ButtonComponent from '@/components/actions/ButtonComponent.vue'

const router = useRouter()

const redirect = async (route_name: 'brass' | 'fermentation') => await router.push({ name: route_name })
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
    <div class="grid grid-rows-2 gap-2 justify-center">
      <ButtonComponent class="px-8" @event="redirect('brass')">Brassagem</ButtonComponent>
      <ButtonComponent class="px-8" @event="redirect('fermentation')">Fermentação</ButtonComponent>
    </div>
  </section>
</template>