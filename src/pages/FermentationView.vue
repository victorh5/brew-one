<script lang="ts" setup>
import Ramp from '@/components/ramp/RampComponent.vue'
import BDoubleButton from '@/components/actions/BDoubleButtonComponent.vue'
import { Input } from '@/models'
import { router } from '@/routes'
import { useSweetAlert } from '@/composables'

const statement = 'Defina as opções de fermentação'
const { success } = useSweetAlert()

const updateRampValues = (newValue: Input) => {
  console.log(newValue)
}
const sendData = async () => {
  await success('Sucesso', 'Dados enviados com sucesso!')
}
const cancel = async () => await router.push({ name: 'home' })
</script>

<template>
  <section id="bras">
    <div class="img">
      <img src="../assets/logo2.png" alt="Logo Brew One">
    </div>
    <div class="content">
      <p>{{ statement }}:</p>

      <div class="main">
        <ramp @get-params="updateRampValues" />
      </div>
      <div class="footer">
        <b-double-button
          label1="Enviar Dados"
          label2="Cancelar"
          @first-event="sendData"
          @second-event="cancel"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#bras {
  padding: 20px 30px;

  .img {
    text-align: center;
  }

  .content {
    .main, .footer {
      padding: 10px;
    }
    .footer {
      margin-top: 100px;
    }
  }

}
</style>