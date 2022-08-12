<script lang="ts" setup>
import { ref } from 'vue'
import Ramp from '@/components/ramp/RampComponent.vue'
import BInput from '@/components/inputs/BInputComponent.vue'
import BDoubleButton from '@/components/actions/BDoubleButtonComponent.vue'
import { router } from '@/routes'
import { useSweetAlert } from '@/composables'

const statement = 'Defina as opções de brassagem'
const input1 = ref('')
const input2 = ref('')
const { success } = useSweetAlert()

const sendData = async () => {
  await success('Sucesso', 'Dados enviados com sucesso!')
  await router.push({ name: 'ramp' })
}
const cancel = async () => {
  await router.push({name: 'home'})
}
</script>

<template>
  <section id="bras">
    <div class="img">
      <img src="../assets/logo2.png" alt="Logo Brew One">
    </div>
    <div class="content">
      <p>{{ statement }}:</p>

      <div class="main">
        <b-input
          label="Aquecimento"
          placeholder="Temperatura (C)"
          v-model="input1"
        />
        <ramp />
        <b-input
          label="Fervura"
          placeholder="Tempo (Minutos)"
          v-model="input2"
          margin_top
        />
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