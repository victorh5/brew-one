<script lang="ts" setup>
import BrewHeader from '@/components/BrewHeader.vue'
import BrewFooter from '@/components/BrewFooter.vue'

const emit = defineEmits(['send-footer'])
defineProps<{
    headerTitle: string
}>()
</script>

<template>
    <section class="relative min-h-screen overflow-auto">
        <brew-header :title="headerTitle" />
        <div class="absolute w-full bottom-24 top-36 overflow-y-auto">
            <slot></slot>
        </div>
        <brew-footer @send="emit('send-footer')" />
    </section>
</template>