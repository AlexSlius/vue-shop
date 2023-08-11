<script setup>
import Slider from '@vueform/slider'
import "@vueform/slider/themes/default.css";

defineProps({
    data: Object
})
</script>

<template>
    <Slider v-model="data.value" :max="10000" :min="500"/>
</template>
  
