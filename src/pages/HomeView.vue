<script lang="ts" setup>
import { useRouter } from 'vue-router'
import BButton from '@/components/actions/BButtonComponent.vue'

const title = 'Seja Bem-vindo'
const sub_title = 'Escolha o procedimento que deseja realizar!'
const router = useRouter()

const redirect = async (route_name: string) => await router.push({ name: route_name })
</script>

<template>
  <section id="home">
    <div class="img">
      <img src="../assets/logo1.png" alt="Logo Brew One">
    </div>
    <div class="text">
      <h1>{{ title }}</h1>
      <p>{{ sub_title }}</p>
    </div>
    <div class="options">
      <div class="bras">
        <b-button label="Brassagem" @event="redirect('brass')" />
      </div>
      <div>
        <b-button label="Fermentação" @event="redirect('fermentation')" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
#home {
  padding: 100px 50px;
  text-align: center;

  .text {
    padding-top: 20px;

    h1 {
      font-weight: bold;
      font-size: 18px;
      text-transform: uppercase;
    }
    p {
     font-weight: 400;
     font-size: 14px; 
    }
  }
  .options {
    padding-top: 50px;
    .bras {
      margin-bottom: 15px;
    }
  }
}
</style>