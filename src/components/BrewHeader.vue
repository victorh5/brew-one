<script lang="ts" setup>
defineProps<{
    title: string
}>()
</script>

<template>
    <div class="grid justify-items-center gap-4 pb-4 px-8 h-36">
        <img src="@/assets/logo2.png" alt="Logo Brew One" class="w-100">
        <h3 class="text-xl justify-self-start">{{ title }}</h3>
    </div>
</template>