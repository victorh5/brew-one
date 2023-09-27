<script lang="ts" setup>
import BrewButton from './actions/BrewButton.vue'
const emit = defineEmits(['send'])
withDefaults(defineProps<{
    backTextButton?: string
    nextTextButton?: string
}>(), { backTextButton: 'Cancelar', nextTextButton: 'Avançar' })
</script>

<template>
    <div class="absolute bottom-0 w-full h-24 flex justify-between px-8 py-2 items-center bg-zinc-900 border-t">
        <brew-button @event="$router.go(-1)" class="w-24">{{ backTextButton }}</brew-button>
        <brew-button @event="emit('send')" class="w-24">{{ nextTextButton }}</brew-button>
    </div>
</template>