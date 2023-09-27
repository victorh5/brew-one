<script lang="ts" setup>
import { ref } from 'vue'
import CardTemperature from '@/components/inputs/CardTemperature.vue'
import BrewToggle from '@/components/inputs/BrewToggle.vue'
import LayoutDefault from '@/layouts/default.vue'

const resistence = ref(false)
const bomb = ref(false)
</script>

<template>
  <layout-default
    header-title="Aquecimento"
  >
    <div class="px-8 py-6">
      <card-temperature />
      <div class="grid grid-cols-2">
        <brew-toggle v-model="resistence" title="Resistência" />
        <brew-toggle v-model="bomb" title="Bomba" />
      </div>
    </div>
  </layout-default>
</template>