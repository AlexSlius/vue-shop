<script setup>
import Slider from '@vueform/slider'
import "@vueform/slider/themes/default.css";

defineProps({
    data: Object,
    min: {
        type: Number,
        default: 500
    },
    max: {
        type: Number,
        default: 20000
    },
    handleRange: Function,
})
</script>

<template>
    <Slider v-model="data.value" :max="max" :min="min" @slide="handleRange" />
</template>
  
