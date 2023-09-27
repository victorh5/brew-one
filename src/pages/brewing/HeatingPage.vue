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
    @send-footer="$router.push({ name: 'follow-ramp' })"
  >
    <div class="px-8">
      <card-temperature title="Temperatura Atual" content="0.0ºC" />
      <div class="grid grid-cols-2 py-6">
        <div>
          <brew-toggle v-model="resistence" title="Resistência" />
        </div>
        <div>
          <brew-toggle v-model="bomb" title="Bomba" />
        </div>
      </div>
    </div>
  </layout-default>
</template>