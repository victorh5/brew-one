<script lang="ts" setup>
import { Input } from '@/models'
import { useSweetAlert } from '@/composables'
import NewRamp from '@/components/ramp/NewRamp.vue'
import LayoutDefault from '@/layouts/default.vue'

const { success } = useSweetAlert()

const updateRampValues = (newValue: Input) => {
  console.log(newValue)
}
const sendData = async () => {
  await success('Sucesso', 'Dados enviados com sucesso!')
}
</script>

<template>
  <layout-default
    header-title="Defina as opções de fermentação:"
    @send-footer="sendData"
  >
    <div class="px-8 pb-2">
      <new-ramp @get-params="updateRampValues" />
    </div>
  </layout-default>
</template>