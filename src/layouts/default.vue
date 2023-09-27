<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { SafeArea } from 'capacitor-plugin-safe-area'
import BrewHeader from '@/components/BrewHeader.vue'
import BrewFooter from '@/components/BrewFooter.vue'

const insets = ref<{
    top: number
    bottom: number
}>({ top: 0, bottom: 0})

onMounted(async () => {
    const safeArea = await SafeArea.getSafeAreaInsets()
    insets.value = safeArea.insets
})
const emit = defineEmits(['send-footer'])
defineProps<{
    headerTitle: string
}>()
</script>

<template>
    <section class="relative min-h-screen overflow-auto">
        <div
            class="z-[99] fixed top-0 w-full"
            :style="`height: ${insets.top}px;`"
        ></div>
        <brew-header
            :style="`padding-top: ${insets.top === 0 ? 16 : 16 + insets.top}px;`"
            :title="headerTitle"
        />
        <div
            class="absolute w-full bottom-24 top-36 overflow-y-auto"
            :style="`top: ${insets.top === 0 ? 144 : 144 + insets.top}px;`"
        >
            <slot></slot>
        </div>
        <brew-footer
            @send="emit('send-footer')"
            :style="`padding-bottom: ${insets.bottom === 0 ? 8 : 8 + insets.bottom}px;`"
        />
    </section>
</template>