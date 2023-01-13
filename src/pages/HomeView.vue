<script lang="ts" setup>
import { useRouter } from 'vue-router'
import ButtonComponent from '@/components/actions/ButtonComponent.vue'

const router = useRouter()

const redirect = async (route_name: string) => await router.push({ name: route_name })
</script>

<template>
  <section>
    <div>
      <img src="../assets/logo1.png" alt="Logo Brew One">
    </div>
    <div>
      <h1>Seja Bem-vindo</h1>
      <p>Escolha o procedimento que deseja realizar!</p>
    </div>
    <div>
      <div>
        <ButtonComponent label="Brassagem" @event="redirect('brass')" />
      </div>
      <div>
        <ButtonComponent label="Fermentação" @event="redirect('fermentation')" />
      </div>
    </div>
  </section>
</template>