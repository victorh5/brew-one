<script lang="ts" setup>
import {ref} from 'vue'

const checkbox = ref(false)
defineProps<{
  title: string
}>()
</script>

<template>
    <div class="mb-2 text-white">{{title}}</div>
    <div class="flex">
      <label :for="title" class="flex items-center cursor-pointer">
        <!-- toggle -->
        <div class="relative">
          <!-- input -->
          <input type="checkbox" :id="title" class="sr-only" v-model="checkbox">
          <!-- line -->
          <div class="block bg-gray-400 w-14 h-8 rounded-full" :class="{'bg-green-500': checkbox}"></div>
          <!-- dot -->
          <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
        </div>
      </label>
    </div>
</template>

<style>
input:checked {
  background-color: green;
}
input:checked ~ .dot {
  transform: translateX(100%);
}
</style>