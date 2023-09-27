<script lang="ts" setup>
import { ref } from 'vue'
import { router } from '@/routes'
import { useSweetAlert } from '@/composables'
import NewRamp from '@/components/ramp/NewRamp.vue'
import BrewInput from '@/components/inputs/BrewInput.vue'
import LayoutDefault from '@/layouts/default.vue'

const input1 = ref('')
const input2 = ref('')
const { success } = useSweetAlert()

const sendData = async () => {
  await success('Sucesso', 'Dados enviados com sucesso!')
  await router.push({ name: 'heating' })
}
</script>

<template>
  <layout-default
    header-title="Defina as opções de brassagem:"
    @send-footer="sendData"
  >
    <div class="px-8 pb-2">
      <brew-input
        label="Aquecimento"
        placeholder="Temperatura (C)"
        v-model="input1"
      />
      <new-ramp />
      <brew-input
        label="Fervura"
        placeholder="Tempo (Minutos)"
        v-model="input2"
      />
    </div>
  </layout-default>
</template>