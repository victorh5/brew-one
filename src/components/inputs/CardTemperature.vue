<script lang="ts" setup>
withDefaults(defineProps<{
  title: string
  content: string
  showActions?: boolean
}>(), {
  showActions: true
})
</script>

<template>
  <div>
    <div class="mb-3 text-base font-normal">{{ title }}</div>
    <div id="component">
      <div class="temperature">
        <h1
          class="flex h-full
            items-center justify-center
            text-black font-bold text-3xl
          "
        >{{ content }}</h1>
      </div>
      <div class="icons" v-if="showActions">
        <div class="bg-white text-black px-2">+</div>
        <div class="bg-white text-black px-2">-</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#component {
  width: 100%;
  display: grid;
  grid-template-columns: max-content max-content;
  grid-template-areas:
  'A B'
  'A B';

  gap: 8px;


  .temperature {
    grid-area: A;
    background-color: #fff;
    padding: 12px;
    border-radius: 5px;
  }
  .icons {
    grid-area: B;
    display: flex;
    flex-direction: column;
    gap: 12px;
    text-align: center;
    font-weight: bold;

    div {
      border-radius: 5px;
    }
  }
}
</style>