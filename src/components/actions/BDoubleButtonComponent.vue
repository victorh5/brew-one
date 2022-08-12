<script lang="ts" setup>
import { toRefs } from 'vue'
import BButton from './BButtonComponent.vue'

const emit = defineEmits(['first-event', 'second-event'])

const props = defineProps<{
  label1: string
  label2: string
  loading1: boolean
  loading2: boolean
}>()

const { label1, label2 } = toRefs(props)
</script>

<template>
  <div class="row margin-top">
    <div class="col">
      <b-button
        :label="label1"
        @event="emit('first-event')"
        :loading="loading1"
      />
    </div>
    <div class="col">
      <b-button
        :label="label2"
        @event="emit('second-event')"
        :loading="loading2"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.row {
  width: 100%;
  display: flex;

  .col {
    width: 50%;
    &:first-child {
      margin-right: 5px;
    }
  }
}

.margin-top {
  margin-top: 5px;
}
</style>
