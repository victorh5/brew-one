<script lang="ts" setup>
import slider from 'vue3-slider'

const emit = defineEmits(['update:modelValue'])
defineProps<{
    label?: string
    modelValue: number
}>()
</script>

<template>
    <div class="grid gap-2">
        <label
            v-if="label"
        >{{ label }}</label>
        <slider
            :model-value="modelValue"
            @drag-end="(value) => emit('update:modelValue', value)"
            color="#08FC21"
            track-color="#FEFEFE"
            :height="25"
            tooltip
            tooltipText="%v%"
        />
    </div>
</template>