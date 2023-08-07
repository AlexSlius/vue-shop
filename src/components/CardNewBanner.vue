<script setup>
import { RouterLink } from 'vue-router';

defineProps({
    path: {
        type: String,
        default: "#",
    },
    scrImg: String
});
</script>

<template>
    <RouterLink :to="path" class="banner__item">
        <img :src="scrImg" alt="image">
        <span>Подробнее>></span>
    </RouterLink>
</template>