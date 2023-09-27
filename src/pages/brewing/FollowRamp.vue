<script lang="ts" setup>
import { ref } from 'vue'
import LayoutDefault from '@/layouts/default.vue'
import CardTemperature from '@/components/inputs/CardTemperature.vue'
import BrewToggle from '@/components/inputs/BrewToggle.vue'
import BrewSlider from '@/components/inputs/BrewSlider.vue'

const resistence = ref('')
const pumpFlow = ref(30)
</script>

<template>
  <layout-default
    header-title="Rampa 1"
  >
    <div class="px-8">
      <div class="flex justify-between">
        <card-temperature title="Temperatura Atual" content="0.0ºC" />
        <card-temperature title="Tempo" content="0 min" :show-actions="false" />
      </div>
      <div class="pb-4 pt-6">
        <brew-toggle v-model="resistence" title="Resistência" />
      </div>
      <div class="py-4">
        <brew-slider label="Fluxo da bomba" v-model="pumpFlow" />
      </div>
    </div>
  </layout-default>
</template>